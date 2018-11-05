 // Globala variabler

var wordList = ['RADIO', 'LAWNMOWER', 'FLASHLIGHT', 'HARIDRYER', 'CROCKPOT', 'BLENDER','KNIFE', 'WOKINGPAN', 'PLATE', 'BOWL']; 
var selectedWord = wordList[Math.floor(Math.random()*wordList.length)];
var splitRandomWord = selectedWord.split('');
var letterBoxes = document.querySelector('#letterBoxes ul');
var hangmanImg = document.querySelector('img');
var hangmanImgNr = "images/h0.png" 
var msgElem = document.querySelector('#message');
var startGameBtn = document.querySelector('#startGameBtn'); 
var letterButtons = document.querySelectorAll('#letterButtons button');
var startTime; // Mäter tiden
var numberOfGuesses = 0;
var successfulGuesses = [];
var restartButton = document.querySelector('#restartBtn')
var gameBoard = document.querySelector('#gameBoard')

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.

window.onload = init; 

function init() {

    hideRestartBtn ();
    gameBoardHidden();
    
    startGameBtn.addEventListener('click', function() {
        wordGenerator();
        createBoxes();
        gameBoardVisible();
        hideStartBtn ();
    });
    
};

function gameBoardVisible () {
    gameBoard.style.visibility = 'visible';
}

function gameBoardHidden () {
    gameBoard.style.visibility = 'hidden';
}

function hideStartBtn () {
    startGameBtn.style.visibility = 'hidden';
}

function showStartBtn () {
    startGameBtn.style.visibility = 'visible'; 
}

function hideRestartBtn () {
    restartButton.style.visibility = 'hidden';
}

function restartBtnToggle () {
    if ( restartButton.style.visibility == 'hidden' ) {
        restartButton.style.visibility = 'visible'; 
    } else  {
        restartButton.style.visibility = 'hidden';
    }  
}

function resetImageandGuess () {
    numberOfGuesses = 0;
    hangmanImg.src=`images/h${numberOfGuesses}.png`;
}

restartBtn.addEventListener('click', function() {
    removeLetterBoxes(); 
    enableButton();
    removeMsg();
    resetImageandGuess();
    showStartBtn();
    hideRestartBtn();
});

function wordGenerator () {
    return wordList[Math.floor(Math.random()*wordList.length)];
}

function removeLetterBoxes() {
    while (letterBoxes.firstChild) {
        letterBoxes.removeChild(letterBoxes.firstChild);
    }
}

function looseMsg () {
    var msgBox = document.createElement('h1');
    var msgBoxContent = document.createTextNode('YOU LOOSE!');
    msgBox.appendChild(msgBoxContent)
    msgElem.appendChild(msgBox);
}

function winMsg () {
    var msgBox = document.createElement('h1');
    var msgBoxContent = document.createTextNode('YOU WIN!')
    msgBox.appendChild(msgBoxContent)
    msgElem.appendChild(msgBox);
}

function removeMsg () {
    msgElem.removeChild(msgElem.lastChild);
};

function enableButton () {
letterButtons.forEach(button => {
    button.disabled = false;
});
}

function disableButton () {
    letterButtons.forEach(button => {
        button.disabled = true;
    });
}

// Add list letterBoxes and create box ids 
function createBoxes() {
for (let index = 0; index < selectedWord.length; index++) {
  let li = document.createElement('li');
  let letterBox = document.createElement('input');
  letterBox.setAttribute('type','text');
  letterBox.setAttribute('value', '-');
  letterBox.setAttribute('id', + [index]);
  li.appendChild(letterBox);
  letterBoxes.appendChild(li);
  }};

letterButtons.forEach(function(button) {
	button.addEventListener('click',function(e){
        let wrongGuess = true; 
        let buttonVal = (event.target.value);
        for (let index = 0; index < splitRandomWord.length; index++) {
            if (buttonVal === splitRandomWord[index]) 
            {  
                let letterBox = document.getElementById(index);
                letterBox.setAttribute('value', buttonVal);
                successfulGuesses.push(buttonVal)
                if (successfulGuesses.length === splitRandomWord.length) {
                    var msgBox = document.createElement('h1');
                    var msgBoxContent = document.createTextNode('YOU WIN!');
                    msgBox.appendChild(msgBoxContent)
                    msgElem.appendChild(msgBox);
                    restartBtnToggle();
                    disableButton();
                }
                wrongGuess = false; 
            }  
        }
            if (wrongGuess) {
                    numberOfGuesses++;
                    hangmanImg.src=`images/h${numberOfGuesses}.png`;
                    wrongGuess = false;
                    if (numberOfGuesses > 5) {
                        var msgBox = document.createElement('h1');
                        var msgBoxContent = document.createTextNode('YOU LOOSE!')
                        msgBox.appendChild(msgBoxContent)
                        msgElem.appendChild(msgBox);
                        restartBtnToggle();
                        disableButton();
                        }
        }
        button.disabled = true;
    });
});

// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner
// Funktionen som tar fram bokstävernas rutor, antal beror på vilket ord
// Funktion som körs när du trycker på bokstäverna och gissar bokstav
// Funktionen ropas vid vinst eller förlust, gör olika saker beroende av de // 
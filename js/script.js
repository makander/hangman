// Global vars
var wordList = ['RADIO', 'LAWNMOWER', 'FLASHLIGHT', 'HARIDRYER', 'CROCKPOT', 'BLENDER', 'KNIFE', 'WOKINGPAN', 'PLATE', 'BOWL'];
var selectedWord = '';
var letterBoxes = document.querySelector('#letterBoxes ul');
var hangmanImg = document.querySelector('img');
var hangmanImgNr = "images/h0.png";
var msgElem = document.querySelector('#message');
var startGameBtn = document.querySelector('#startGameBtn');
var letterButtons = document.querySelectorAll('#letterButtons button');
var numberOfGuesses = 0;
var successfulGuesses = [];
var restartButton = document.querySelector('#restartBtn');
var gameBoard = document.querySelector('#gameBoard');
var rules = document.querySelector('#rules')
// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.

window.onload = init;

function init() {

    hideRestartBtn();
    gameBoardHidden();
    startGameBtn.addEventListener('click', function () {
        selectedWord = wordGenerator();
        createBoxes();
        gameBoardVisible();
        hideStartBtn();
        successfulGuesses = [];
        hideRules();
    });
}

function hideRules() {
    rules.style.display = "none";
}

function gameBoardVisible() {
    gameBoard.style.visibility = 'visible';
}

function gameBoardHidden() {
    gameBoard.style.visibility = 'hidden';
}

function hideStartBtn() {
    startGameBtn.style.visibility = 'hidden';
}

function showStartBtn() {
    startGameBtn.style.visibility = 'visible';
}

function hideRestartBtn() {
    restartButton.style.visibility = 'hidden';
}

function showRestartBtn() {
    restartButton.style.visibility = 'visible';
}

// Loop over buttons to enable them 
function enableButton() {
    letterButtons.forEach(button => {
        button.disabled = false;
    })
};

// Loop over buttons to disable them
function disableButton() {
    letterButtons.forEach(button => {
        button.disabled = true;
    });
}


function resetImageandGuess() {
    numberOfGuesses = 0;
    hangmanImg.src=`images/h${numberOfGuesses}.png`;
}

// Restart button resets the game, remove letterBoxes, enables all buttons, removes messages
restartBtn.addEventListener('click', function() {
    removeLetterBoxes();
    enableButton();
    removeMsg();
    resetImageandGuess();
    showStartBtn();
    hideRestartBtn();
    gameBoardHidden();
});

function wordGenerator() {
    return wordList[Math.floor(Math.random()*wordList.length)];
}

function removeLetterBoxes() {
    while (letterBoxes.firstChild) {
        letterBoxes.removeChild(letterBoxes.firstChild);
    }
}

function looseMsg() {
    var msgBox = document.createElement('h1');
    var msgBoxContent = document.createTextNode('YOU LOOSE!');
    msgBox.appendChild(msgBoxContent);
    msgElem.appendChild(msgBox);
}

function winMsg() {
    var msgBox = document.createElement('h1');
    var msgBoxContent = document.createTextNode('YOU WIN!');
    msgBox.appendChild(msgBoxContent);
    msgElem.appendChild(msgBox);
}

function removeMsg() {
    msgElem.removeChild(msgElem.lastChild);
};

// Add list letterBoxes and create box ids.
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

/*
Button behavoir
Buttons get disabled after click. 

Logs keyvaule and compares it to index of the selected word.
If value matches it gets pushed into the successfullGuess array.
When the successful guess array is full, the win message appears.

If the keyvalue doesn't match the selected word index, the wrongGuess bool is set to true.
The numberOfGuesses gets incremented. 
The hangmanImgsrc changes and increments.
Finally the loose message appears if there are too many wrong guesses. 
*/

  letterButtons.forEach(function (button) {
	button.addEventListener('click', function (e) {
        let wrongGuess = true;
        let buttonVal = (event.target.value);
        for (let index = 0; index < selectedWord.length; index++) {
            if (buttonVal === selectedWord[index])
            {  
                let letterBox = document.getElementById(index);
                letterBox.setAttribute('value', buttonVal);
                successfulGuesses.push(buttonVal);
                if (successfulGuesses.length === selectedWord.length) {
                    var msgBox = document.createElement('h1');
                    var msgBoxContent = document.createTextNode('YOU WIN!');
                    msgBox.appendChild(msgBoxContent);
                    msgElem.appendChild(msgBox);
                    showRestartBtn();
                    disableButton();
                }
                wrongGuess = false;
            }  
        }
            if (wrongGuess) {
                    numberOfGuesses++;
                    hangmanImg.src = `images/h${numberOfGuesses}.png`;
                    wrongGuess = false;
                    if (numberOfGuesses > 5) {
                        var msgBox = document.createElement('h1');
                        var msgBoxContent = document.createTextNode('YOU LOSE!');
                        msgBox.appendChild(msgBoxContent);
                        msgElem.appendChild(msgBox);
                        showRestartBtn();
                        disableButton();
                        }
        }
        button.disabled = true;
    })}
);
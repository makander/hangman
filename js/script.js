 // Globala variabler

var wordList = ['RADIO', 'LAWNMOWER', 'FLASHLIGHT', 'HARIDRYER', 'CROCKPOT', 'BLENDER','KNIFE', 'WOKINGPAN', 'PLATE, BOWL']; 
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
var restartButton = document.querySelector('restartBtn')

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.

function init() {
    startGameBtn.addEventListener('click', createBoxes);
    restartBtn.style.visibility = 'hidden';
};
window.onload = init; 

// Add list letterBoxes and create box ids 
function createBoxes() {
for (let index = 0; index < splitRandomWord.length; index++) {
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
                    var msgBoxContent = document.createTextNode('YOU WIN!')
                    msgBox.appendChild(msgBoxContent)
                    msgElem.appendChild(msgBox);
                    restartBtn.style.visibility = 'visible';
                }
                wrongGuess = false; 
            }  
        }
            if (wrongGuess) {
                    numberOfGuesses++;
                    hangmanImg.src=`images/h${numberOfGuesses}.png`;
                    wrongGuess = false;
                    if (numberOfGuesses > 7) {
                        var msgBox = document.createElement('h1');
                        var msgBoxContent = document.createTextNode('YOU LOOSE!')
                        msgBox.appendChild(msgBoxContent)
                        msgElem.appendChild(msgBox);
                        restartBtn.style.visibility = 'visible';
                        }
        }
        button.disabled = true;
    });
});

// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner
// Funktionen som tar fram bokstävernas rutor, antal beror på vilket ord
// Funktion som körs när du trycker på bokstäverna och gissar bokstav
// Funktionen ropas vid vinst eller förlust, gör olika saker beroende av det
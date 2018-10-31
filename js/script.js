 // Globala variabler

var wordList; // Lista med spelets alla ord
var selectedWord; // Ett av orden valt av en slumpgenerator
const letterBoxes = document.querySelector('#letterBoxes ul');
var hangmanImg; //Bild som kommer vid fel svar
var hangmanImgNr; // Vilken av bilderna som kommer upp beroende på hur många fel du gjort
var msgElem; // Ger meddelande när spelet är över
var startGameBtn = document.getElementById('startGameBtn'); 
var letterButtons = document.querySelectorAll('#letterButtons button');
var startTime; // Mäter tiden

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {} // End init

window.onload = init; // Se till att init aktiveras då sidan är inladdad


startGameBtn.addEventListener('click', function(e){
    console.log('LET THE GAMES BEGIN!')
});


var wordList = ['RADIO', 'LAWNMOWER', 'FLASHLIGHT', 'HARIDRYER', 'CROCKPOT', 'BLENDER','KNIFE'];

// Genererar ett slumpmässigt ord utifån Math.random funktionen och trycker ut list items. 
var selectedWord = wordList[Math.floor(Math.random()*wordList.length)];
console.log(selectedWord)


// Bryter ner ordlistarn till chars
var splitRandomWord = selectedWord.split('');

// Add list letterBoxes 

console.log(letterBoxes);

for (let index = 0; index < splitRandomWord.length; index++) {
  var li = document.createElement('li');
  var letterBox = document.createElement('input');
  letterBox.setAttribute('type','text');
  letterBox.setAttribute('value', '-');

  li.appendChild(letterBox);
  letterBoxes.appendChild(li);
  }

letterButtons.forEach(function(button) {
	button.addEventListener('click',function(e){

        let buttonVal = (event.target.value);
        console.log('Detta är ordet i funktionen med knapptryck: ' + splitRandomWord)

        for (let index = 0; index < splitRandomWord.length; index++) {
            if (buttonVal === splitRandomWord[index]) {          
              letterBox.setAttribute('value', buttonVal);
              
            } else { 
                console.log('error')
            }
        }
        button.disabled = true;
    });
});


// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner

// Funktion som slumpar fram ett ord
 
// Funktionen som tar fram bokstävernas rutor, antal beror på vilket ord

// Funktion som körs när du trycker på bokstäverna och gissar bokstav

// Funktionen ropas vid vinst eller förlust, gör olika saker beroende av det

// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på */
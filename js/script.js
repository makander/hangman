 // Globala variabler

var wordList; // Lista med spelets alla ord
var selectedWord; // Ett av orden valt av en slumpgenerator
const letterBoxes = document.querySelector('#letterBoxes ul');
var hangmanImg; //Bild som kommer vid fel svar
var hangmanImgNr; // Vilken av bilderna som kommer upp beroende på hur många fel du gjort
var msgElem; // Ger meddelande när spelet är över
var startGameBtn; // Knappen du startar spelet med
var letterButtons = document.querySelectorAll('#letterButtons button');
var startTime; // Mäter tiden

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {} // End init

window.onload = init; // Se till att init aktiveras då sidan är inladdad

var wordList = ['radio', 'lawnmower', 'flashlight', 'hairdryer', 'crockpot', 'blender','knife'];

// Genererar ett slumpmässigt ord utifån Math.random funktionen och trycker ut list items. 
var selectedWord = wordList[Math.floor(Math.random()*wordList.length)];



// Bryter ner ordlistarn till chars
var splitRandomWord = selectedWord.split('');

// Add list letterBoxes 

console.log(letterBoxes);

for (let index = 0; index < splitRandomWord.length; index++) {
  var li = document.createElement('li');
  var letterBox = document.createElement('input');
  letterBox.setAttribute('type','text');

  li.appendChild(letterBox);
  letterBoxes.appendChild(li);
  
}

/* letterButtons.forEach(function(button) {
	button.addEventListener('click',function(e){
	alert('DU TRYCKTE PÅ EN KNAPP!');
    });
}); */

/* const list = document.querySelector('#book-list ul');

list.addEventListener('click',function(e){
    if(e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
}) */


// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner

// Funktion som slumpar fram ett ord
 
// Funktionen som tar fram bokstävernas rutor, antal beror på vilket ord

// Funktion som körs när du trycker på bokstäverna och gissar bokstav

// Funktionen ropas vid vinst eller förlust, gör olika saker beroende av det

// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på */
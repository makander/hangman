 // Globala variabler

var wordList; // Lista med spelets alla ord
var selectedWord; // Ett av orden valt av en slumpgenerator
//var letterBoxes; //Rutorna där bokstäverna ska stå
var hangmanImg; //Bild som kommer vid fel svar
var hangmanImgNr; // Vilken av bilderna som kommer upp beroende på hur många fel du gjort
var msgElem; // Ger meddelande när spelet är över
var startGameBtn; // Knappen du startar spelet med
var letterButtons;
var startTime; // Mäter tiden

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {} // End init

window.onload = init; // Se till att init aktiveras då sidan är inladdad

 var wordList = ['radio', 'lawnmower', 'flashlight', 'hairdryer', 'crockpot', 'blender','knife'];


 // Genererar ett slumpmässigt ord utifån Math.random funktionen och trycker ut list items. 
var selectedWord = wordList[Math.floor(Math.random()*wordList.length)];


const letterBoxes = document.getElementById('letterBoxes');
var list = document.createElement('ul');

for (let index = 0; index < selectedWord.length; index++){
  var listItem = document.createElement('li');
  listItem.innerHTML = "<li><input type='text'></li>";
  list.appendChild(listItem);
}
document.getElementById('letterBoxes').appendChild(list);

    


// Bryter ner ordlistarn till chars
var splitRandomWord = selectedWord.split('');
console.log(splitRandomWord);






// var letterButtons = document.querySelectorAll('#letterButtons li button');



/* for (let index = 0; index < letterButtons.length; index++) {
  letterButtons[i].addEventListener("click", function() {
    console.log(letterButtons.value);




function compareWordAndButton () {
for (let char of splitRandomWord) {
    if (letterButtons === char)
    {

    }
        
  } else (letterbox) gtfo 
}

document.getElementById(id).value


Skapa array med ord. (Wordlist)
Kör random på den arrayen och skriv ut ett ord. 
Hur gör man det?

wordlist array har 7 ord, välj en array index slumpmässigt och skriv ut det.


Spara det ordet in i en variabel
bryt ner ordet till chars
jämför det ordet mot input ifrån användaren.

*/ 

// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner

// Funktion som slumpar fram ett ord
 
// Funktionen som tar fram bokstävernas rutor, antal beror på vilket ord

// Funktion som körs när du trycker på bokstäverna och gissar bokstav

// Funktionen ropas vid vinst eller förlust, gör olika saker beroende av det

// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på */
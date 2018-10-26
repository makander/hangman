// Globala variabler

var wordList; // Lista med spelets alla ord
var selectedWord; // Ett av orden valt av en slumpgenerator
var letterBoxes; //Rutorna där bokstäverna ska stå
var hangmanImg; //Bild som kommer vid fel svar
var hangmanImgNr; // Vilken av bilderna som kommer upp beroende på hur många fel du gjort
var msgElem; // Ger meddelande när spelet är över
var startGameBtn; // Knappen du startar spelet med
var letterButtons; // Knapparna för bokstäverna
var startTime; // Mäter tiden

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {} // End init

window.onload = init; // Se till att init aktiveras då sidan är inladdad

var wordList = ['radio', 'lawnmower', 'flashlight', 'hairdryer', 'crockpot', 'blender','knife'];
console.log(wordList.length);

var randomWordGenerator = wordList[Math.floor(Math.random()*wordList.length)];
console.log(randomWordGenerator);

var splitRandomWord = randomWordGenerator.split('');
console.log(splitRandomWord);


function compareWordAndButton () {
for (let word of splitRandomWord) {
    if (letterButtons === word)
        fakkin' make it work dammit. 
  } else (letterbox) gtfo 
}

/* 
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

// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på
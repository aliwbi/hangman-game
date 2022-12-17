let secretPhrase = ["pizza", "overslept", "medicine", "volleyball", "fascinating"];
let randomItem;
let result = "";
let clicked = [];
let mistakes = 0;

function selectRandomItem(){
    randomItem = secretPhrase[Math.floor(Math.random() * secretPhrase.length)];
    document.getElementById("letters").addEventListener("click", buttonHandler);
    window.addEventListener("keydown", keyHandler);
    console.log(randomItem)
};

function letterHandler(letter){
    letter = letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
    document.getElementById(letter.toUpperCase()).classList = "used";
   if(randomItem.indexOf(letter) >= 0){
    setUnderScores();
    checkIfWon();
   }else if (randomItem.indexOf(letter) === -1){
    mistakes++;
    checkIfLost();
    updateHangmanPic();
   }
};

function setUnderScores(){
    let splittedName = randomItem.split("");
    let mappedWord = splittedName.map(letter => clicked.indexOf(letter) >= 0 ? letter : "_");
    result = mappedWord.join("");
    document.getElementById("clue").querySelector("p").innerHTML = `<p>${result}</p>`;
};

function checkIfWon(){
    if (randomItem === result){
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("image").querySelector("img").src = "assets/winner.png";
    }
};

function checkIfLost(){
    if (mistakes === 6){
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("clue").querySelector("p").innerHTML = `<p>random word is : ${randomItem}</p>`;
    }
};

function updateHangmanPic(){
    const image = document.getElementById("image").querySelector("img");
    image.src = `assets/hangman${mistakes}.png`;
}


function buttonHandler(event){
    letterHandler(event.target.id);
};

function keyHandler(event){
    letterHandler(event.key);
};

selectRandomItem()
setUnderScores()
updateHangmanPic()
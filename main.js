const secretPhrases=["never", "bullet", "break", "lose", "beautyfull", "heart", "win", "lost", "fine", "best", "friend", "family", "afraid"];

let rnadomItem="";
let clicked=[];
let result="";
let mistakes=0;

function selectRandomItem(){
    rnadomItem=secretPhrases[Math.floor(Math.random()*secretPhrases.length)];
    document.getElementById("letters").addEventListener("click", buttonHalder);
    window.addEventListener("keydown", keyHandler);
    console.log(rnadomItem);
}
function checkIfWon(){
    if(result===rnadomItem){
        document.getElementById("gameover").querySelector("p").style.display="block";
        document.getElementById("image").querySelector("img").src="./winner.png";
    }
}

function checkIfLost(){
    if(mistakes==6){
        document.getElementById("gameover").querySelector("p").style.display="block";
        document.getElementById("clue").querySelector("p").innerText=`Word is: ${rnadomItem}`;
    }
}

function updateHangmanPic(){
    document.getElementById("image").querySelector("img").src=`./hangman${mistakes}.png`
}

function letterHandler(letter){
    letter=letter.toLowerCase();
    clicked.indexOf(letter)===-1?clicked.push(letter):null;
    document.getElementById(letter.toUpperCase()).classList="used";
    if(rnadomItem.indexOf(letter)>=0){
        setUnderScores();
        checkIfWon()
    }else if(rnadomItem.indexOf(letter)==-1){
        mistakes++;
        checkIfLost();
        updateHangmanPic();
    }
}

function setUnderScores(){
    let spitedWord=rnadomItem.split("");
    let mappedWord=spitedWord.map(letter=>(clicked.indexOf(letter)>=0?letter:"_"));
    result=mappedWord.join("");
    document.getElementById("clue").querySelector("p").innerHTML=result;
}


function buttonHalder(event){
    letterHandler(event.target.id)
}

function keyHandler(evnet){
    letterHandler(evnet.key)
}

selectRandomItem();
setUnderScores()
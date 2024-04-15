let gameSeq = [];
let userSeq = [];
h2 = document.querySelector("h2");


let gameStart = false;

let Level = 0;
let btns = ["red", "green", "purple", "yellow"]

document.addEventListener("keypress",function(){
    if(gameStart === false){
        console.log("Game was start..")
        gameStart = true;
        
        
        levelUp()
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },500)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },250)
}
function levelUp(){
    userSeq = [];
    Level++
    score++
    h2.innerText = `Level ${Level}`;
    // Chose color
    
    let ranidx = Math.floor((Math.random()*3));
    let randomColor = btns[ranidx];
    let randElement = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randElement);
}

let score = 0;
let highScore = document.querySelector("h3");
function Score(){
    if(Level >= 1)
    highScore.innerHTML = `Your high score was <br><h1>${score}</h1>`;
    highScore.style.visibility = "visible";
}

function checkValues(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
        setTimeout(levelUp,1000);
        }
        
    }else{
        h2.innerHTML = `Game was over! <b>And your score was ${Level} <br> Press any button to play again.`;
        Score()

        reset();
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "#281154";
        },450)
    }
}

let allBtns = document.querySelectorAll(".btn");

function btnPress(){
    let btn = (this);
    userFlash(btn);
    let value = btn.getAttribute("id");
    userSeq.push(value);
    console.log(userSeq);
    checkValues(userSeq.length-1);
}

for (let btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    gameStart = false;
    Level = 0;
    gameSeq = [];
    userSeq = [];
}
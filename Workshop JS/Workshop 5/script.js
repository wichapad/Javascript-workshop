const levelButton = document.getElementById("level-btn");
const setting = document.getElementById("setting");
const levelForm = document.getElementById("level-form");
const levelEl = document.getElementById("level");

const wordEL = document.getElementById("word");
const textEL = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");

const gameOverEL = document.getElementById("gameover");

const wordsRandom = ["Involved", "A while", "Passed", "Asking", "Calculator"]

let randomWord;
let score = 0;
let time = 10; // easy => 15s , medium => 10s , hard => 5s
const saveMode = localStorage.getItem("mode") !== null ? localStorage.getItem("mode") : "medium";;

let level = "medium"

const timeInterval = setInterval(updateTime, 1000); //update time ทุกๆ 1 วิ

function getRandomWord() {
    return wordsRandom[Math.floor(Math.random() * wordsRandom.length)]
}

function displayWord() {
    randomWord = getRandomWord();
    wordEL.innerHTML = randomWord;
    timeEl.innerHTML = time;

}

textEL.addEventListener("input", (e) => {
    const inputText = e.target.value;
    if (inputText === randomWord) {
        
        if (saveMode === "easy") {
            time+=5
        } else if (saveMode === "medium") {
            time+=3
        } else {
            time+=2
        }
        displayWord();
        updateScore();
    } else {
        e.target.value
    }
})

function updateScore() {
    score += 10;
    scoreEl.innerHTML = score
}

//
function updateTime() {
    time--;
    timeEl.innerHTML = time;
    if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}

function gameOver() {
    gameOverEL.innerHTML = `
    <h1>Game Over</h1>
    <p>Score = ${score}</p>
    <button onclick="location.reload()">Reload</button>
    `
    gameOverEL.style.display = "flex";
}

levelButton.addEventListener("click", () => {
    setting.classList.toggle("hide");

})

levelEl.addEventListener("change", (e) => {
    level = e.target.value
    localStorage.setItem("mode", level);

})

function startGame() { // เริ่มต้นเกมส์ ตั้งค่าเวลา
    
    levelEl.value = saveMode

    if (saveMode === "easy") {
        time = 15
    } else if (saveMode === "medium") {
        time = 10
    } else {
        time = 5
    }
    displayWord();

}

startGame()
textEL.focus();
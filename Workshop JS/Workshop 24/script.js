const questionData = [
    {
        question: "1.ข้อใดไม่ใช่ระบบปฏิบัติการ",
        a: "ระบบปฏิบัตรการดอส",
        b: "ไมโครซอฟเวิร์ด",
        c: "ไมโครซอฟวินโวส์",
        d: "ระบบปฏิบัตรการแอนดรอยด์",
        correct: "b"
    },
    {
        question: "2.ข้อใดคือโปรแกรม Web Browser",
        a: "google chrome",
        b: "Keyboard",
        c: "Mouse",
        d: "Monitor",
        correct: "a"
    },
    {
        question: "3.ข้อใดคือฮาร์ดแวร์",
        a: "Keyboard",
        b: "Mouse",
        c: "Monitor",
        d: "ถูกทุกข้อ",
        correct: "d"
    },
];

const container =document.querySelector(".question_container");

const questionEL = document.getElementById("question")
const answerELs = document.querySelectorAll(".answer")
const choiceA = document.getElementById("a_choice")
const choiceB = document.getElementById("b_choice")
const choiceC = document.getElementById("c_choice")
const choiceD = document.getElementById("d_choice")

const submitBtn = document.getElementById("submit")

let currentQuestion = 0;
let score = 0;
loadQuestion();


function loadQuestion() {
    checkChoice();
    const currentQuizData = questionData[currentQuestion];
    questionEL.innerText = currentQuizData.question;
    choiceA.innerText = currentQuizData.a;
    choiceB.innerText = currentQuizData.b;
    choiceC.innerText = currentQuizData.c;
    choiceD.innerText = currentQuizData.d;
}

function checkChoice() {
    answerELs.forEach(answerEL => answerEL.checked = false);
}

submitBtn.addEventListener('click', () => {
    let answer = getChoiceAnswer();
    if (answer) {
        if (answer === questionData[currentQuestion].correct) {
            score ++;
        };
        currentQuestion ++;
        if (currentQuestion<questionData.length) {
            loadQuestion();
        } else{
            container.innerHTML = `<h2>Score : ${score} / ${questionData.length}</h2>`
        }
    };
});

function getChoiceAnswer() {
    let answer;
    answerELs.forEach(answerEL => {
        if (answerEL.checked) {
            answer = answerEL.id;
        };
    });
    return answer;
};


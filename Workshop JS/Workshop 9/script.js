//input
const inputCon = document.getElementById("input_container");
const countDownForm = document.getElementById("countDownForm");
const dateEl = document.getElementById("date_picker");

//countdown
const countDownEl = document.getElementById("countdown");
const countDownTitleEL = document.getElementById("coundown_title");
const countDownBtn = document.getElementById("countdown_cancel");
const timeEl = document.querySelectorAll("span");

//conplete
const completeEl = document.getElementById("complete");
const completeInfoEl = document.getElementById("complete_info");
const completeBtn = document.getElementById("complete_btn");

//ตัวแปรควบคุมการทำงาน
let countdownTitle = "";
let countdownDate = "";

let countdownValue = Date; //เก็บวันที่เลือกจาก form
let countDownActive; //ตัวนับเวลา
let saveCountDown; //เก็บข้อมูลหัวขัอและวันแจ้งเตือน (object)

//ตัวแปลงหน่วยเววลา
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;


countDownForm.addEventListener("submit", updateCountdown);

function updateCountdown(e) {
    e.preventDefault();
    countDownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;

    if (countDownTitle === "") {
        alert("ป้อนข้อมูลไม่ครบ");
    } else {
        saveCountDown = { title: countDownTitle, date: countdownDate };
        localStorage.setItem("countDown", JSON.stringify(saveCountDown));
        countdownValue = new Date(countdownDate).getTime(); //เวลาที่ตั้งไว้
        setUpTime();
    }
}


function setUpTime() {
    countDownActive = setInterval(() => {
        //เวลาปัจจุบัน หาผลต่างกับเวลาที่ตั้งเอาไว้ ว่ามีผลต่างเวลาเท่าไร
        const now = new Date().getTime();
        const disTance = countdownValue - now; //เวลาอนาคต - เวลาปัจจุบัน
        const days = Math.floor(disTance / day);
        const hours = Math.floor((disTance % day) / hour);
        const minuits = Math.floor((disTance % hour) / minute);
        const seconds = Math.floor((disTance % minute) / second);
        inputCon.hidden = true;

        if (disTance < 0) {
            //หมดเวลา

        } else {
            countDownTitleEL.textContent= `${countdownTitle}`;
            // นับถอยหลังเรื่อยๆ
            timeEl[0].textContent = `${days}`;
            timeEl[1].textContent = `${hours}`;
            timeEl[2].textContent = `${minuits}`;
            timeEl[3].textContent = `${seconds}`;
            countDownEl.hidden = false;
            completeEl.hidden = true;
        }
    }, second);
}
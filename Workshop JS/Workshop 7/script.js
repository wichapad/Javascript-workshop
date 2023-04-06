const calculatorDisplay = document.querySelector("h1");
const inputBtn = document.querySelectorAll("button"); //ผลเป็น array
const clearBtn = document.getElementById("clear_btn");

const calculate = {
    "/":(firstNumber,secondNumber)=>secondNumber != 0 ? firstNumber/secondNumber : "error",
    "*":(firstNumber,secondNumber)=>firstNumber * secondNumber,
    "+":(firstNumber,secondNumber)=>firstNumber + secondNumber,
    "-":(firstNumber,secondNumber)=>firstNumber - secondNumber,
    "=":(firstNumber,secondNumber)=>secondNumber 

}

let firstvalue = 0; //ตัวเลขชุดที่ 1
let operatorValue = ''; //เก็บตัวดำเนินการ  + - * /
let waitForNext = false; //เก็บสถานะตัวเลขและตัวดำเนินการ

function setNumberValue(number) {
    if (waitForNext) { //ถ้า waitForNext เป็นจริง
        calculatorDisplay.textContent = number;
        waitForNext = false;
    } else {
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === "0" ? number : displayValue + number; //เมื่อ displayValue มีค่าเป็น 0 ให้แทนที่ด้วย number แต่ถ้าเป็นเลขอื่น จะให้ displayValue+number ที่ส่งมา
    }
}

function callOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);

    if(operatorValue && waitForNext){
        operatorValue=operator;
        return;
    }

    if (!firstvalue) { //ถ้ายังไม่มีการกับหนดค่า
        firstvalue = currentValue; //ค่าเริ่มต้น
    } else {
        const result = calculate[operatorValue](firstvalue,currentValue);
        calculatorDisplay.textContent=result;
        firstvalue=result;
        if (firstvalue === "error") {
            resetAll();
        }
    }
    operatorValue = operator;
    waitForNext = true


}

function addDecimal() {
    if(waitForNext) return; //ถ้า waitfornext เป็นจริง จะไม่สามารถทำงานคำสั่งด้านล่างได้
    if (!calculatorDisplay.textContent.includes(".")) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.` //แสดง . ใน calDisplay
    }

}
//กรองข้อมูล array ต้องใช้ forEach กรองข้อมูล
inputBtn.forEach((input) => {
    if (input.classList.length === 0) {
        input.addEventListener("click", () => setNumberValue(input.value));
    } else if (input.classList.contains("operator")) {
        input.addEventListener("click", () => callOperator(input.value));
    } else if (input.classList.contains("decimal")) {
        input.addEventListener("click", () => addDecimal());
    }
});

function resetAll() {
    firstvalue= 0;
    operatorValue="";
    waitForNext=false;
    calculatorDisplay.textContent = "0";
}

clearBtn.addEventListener("click", () => resetAll())


const balance = document.getElementById("balance");

const moneyPlus = document.getElementById("money_plus");
const moneyMinus = document.getElementById("money_minus");

const listItem = document.getElementById("list");

const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");



let transaction = [];

function init() {
    listItem.innerHTML="";
    transaction.forEach(addDataToList);
    calculateMoney()

}

function addDataToList(transaction) {
    const symbol = transaction.amount < 0 ? "-" : "+";
    const status = transaction.amount < 0 ? "minus" : "plus";
    const item = document.createElement("li");
    result = formatNumber(Math.abs(transaction.amount))
    item.classList.add(status)
    item.innerHTML = `${transaction.text}<span>${symbol}${result}</span>
                <button class="delete_btn" onclick="removeData(${transaction.id})">X</button>
                `
    listItem.appendChild(item);

}
// สุ่ม ID
function autoID() {
    return Math.floor(Math.random()*10000000)
}
// ลบข้อมูล
function removeData(id) {
    transaction = transaction.filter(transaction => transaction.id !==id);
    init()
}

function calculateMoney() {
    const amounts = transaction.map(transaction => transaction.amount);
    //คำนวณยอดคงเหลือ
    const total = amounts.reduce((result, item) => (result += item), 0).toFixed(2);
    //คำนวณรายรับ
    const totalPlus = amounts.filter(item => item > 0).reduce((result, item) => (result += item), 0).toFixed(2);
    //คำนวณรายจ่าย
    const totalMinus = (amounts.filter(item => item < 0).reduce((result, item) => (result += item), 0) * -1).toFixed(2);

    //แสดงผล
    balance.innerText = `฿` + formatNumber(total)
    moneyPlus.innerText = `฿` + formatNumber(totalPlus)
    moneyMinus.innerText = `฿` + formatNumber(totalMinus)
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
//เพิ่มข้อมูลธุรกรรม
function addTransaction(e) {
    e.preventDefault();
    if (text.value.trim() === "" || amount.value.trim() === "") {
        alert("Please Type")
    } else{
        const data = {
            id: autoID(),
            text: text.value,
            amount: +amount.value
        }
        transaction.push(data);
        addDataToList(data);
        calculateMoney();
        text.value='';
        amount.value='';
    }
}
//คลิ๊กปุ่ม submit
form.addEventListener('submit', addTransaction);

init();
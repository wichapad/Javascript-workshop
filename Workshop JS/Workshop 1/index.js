const currenyOne = document.getElementById("currency-one");
const currenyTwo = document.getElementById("currency-two");

const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");

const rateExchange = document.getElementById("rate");
const switchChange = document.getElementById("btn");

currenyOne.addEventListener("change",calculateMoney);
currenyTwo.addEventListener("change",calculateMoney);

amountOne.addEventListener("input",calculateMoney)
amountTwo.addEventListener("input",calculateMoney)

function calculateMoney() {
    const one = currenyOne.value;
    const two = currenyTwo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
    .then(res => res.json())
    .then(data => {
        const rate =data.rates[two];
        rateExchange.innerText = `1 = ${one} = ${rate} ${two}`
        amountTwo.value =(amountOne.value * rate);
    }); 
    
}

switchChange.addEventListener("click", () =>{
    const temp = currenyOne.value; // ต้นทาง
    currenyOne.value = currenyTwo.value;
    currenyTwo.value = temp;
    calculateMoney();
});
calculateMoney()
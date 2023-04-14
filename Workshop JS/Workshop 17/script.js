// const card = document.querySelector(".card");
const showBtn = document.getElementById("show");
const hiddenBtn = document.getElementById("btn_hidden");

const addContainer = document.getElementById("add_container");

const cardContainer = document.getElementById("card_container");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const currentEl = document.getElementById("current");
const clearBtn = document.getElementById("clear");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");

const addCard = document.getElementById("add_card");

let currentActiveCard = 0;
let cardEl = []; //เก็บจำนวนคำถาม
const cardData = getCardData();

function createCard() {
    cardData.forEach((data, index) => {
        createSingleCard(data, index);
    });
}

function createSingleCard(data, index) {
    const card = document.createElement("div");
    card.classList.add("card");

    if (index == 0) {
        card.classList.add("active");
    }

    card.innerHTML = `
        <div class="inner_card">
            <div class="inner_card_front">
                <p>${data.question}</p>
            </div>
            <div class="inner_card_back">
                <p>${data.answer}</p>
            </div>
        </div>
    `;
    card.addEventListener('click', () => card.classList.toggle("show_answer"));
    cardEl.push(card);
    cardContainer.appendChild(card);
    updateCurrent();
}

function updateCurrent() {
    currentEl.innerText = `${currentActiveCard + 1} / ${cardEl.length}`;
}

createCard();

// card.addEventListener("click" ,()=>card.classList.toggle("show_answer"));
showBtn.addEventListener('click', () => addContainer.classList.add("show"));
hiddenBtn.addEventListener("click", () => addContainer.classList.remove("show"));

nextBtn.addEventListener('click', () => {
    cardEl[currentActiveCard].className = "card left";
    currentActiveCard = currentActiveCard + 1;
    if (currentActiveCard > cardEl.length - 1) {
        currentActiveCard = cardEl.length - 1;
    }
    cardEl[currentActiveCard].className = "card active";
    updateCurrent();
});
prevBtn.addEventListener('click', () => {
    cardEl[currentActiveCard].className = "card right";
    currentActiveCard = currentActiveCard - 1;
    if (currentActiveCard < 0) {
        currentActiveCard = 0;
    }
    cardEl[currentActiveCard].className = "card active";
    updateCurrent();
});

addCard.addEventListener('click', () => {
    const question = questionEl.value;
    const answer = answerEl.value;

    if (question.trim() && answer.trim()) {
        const newCard = { question, answer };
        createSingleCard(newCard);
        questionEl.value = '';
        answerEl.value = '';
        addContainer.classList.remove("show")
        cardData.push(newCard);
        setCardData(cardData);
    }
})

function setCardData(cards) {
    localStorage.setItem("cards",JSON.stringify(cards));
    window.location.reload();
}

function getCardData() {
    const cards = JSON.parse(localStorage.getItem("cards"));
    return cards === null ? [] : cards;
}

clearBtn.addEventListener('click',()=>{
    localStorage.clear();
    cardContainer.innerHTML='';
    window.location.reload();
})
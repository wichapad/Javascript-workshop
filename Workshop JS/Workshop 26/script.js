const ratingContainer = document.querySelector(".rating_container");
const ratings = document.querySelectorAll(".rating");
const panel = document.getElementById("panel");
const sendBtn = document.getElementById("send");


let selected;
ratingContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains("rating")) {
        removeActive();
        e.target.parentNode.classList.add("active");
        selected = e.target.nextElementSibling.innerHTML;
    }
})

function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove("active")

    }
}

sendBtn.addEventListener('click',()=>{
    panel.innerHTML = `
        <img src="image/heart.svg" alt="" class="img_complete">
        <strong>ขอบคุณที่ใช้บริการ</strong>
        <br>
        <strong>ผลการประเมิน : ${selected}</strong>
    `
})
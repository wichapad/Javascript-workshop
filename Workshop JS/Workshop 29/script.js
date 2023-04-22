const header = document.getElementById("header");
const title = document.getElementById("title");
const description = document.getElementById("description");
const profileImg = document.getElementById("profile_img");
const sellerName = document.getElementById("name");
const sellerPrice = document.getElementById("price");

const animatedBg =document.querySelectorAll(".animated_bg");
const animatedText =document.querySelectorAll(".animated_text");

setTimeout(showContent,2000);

function showContent() {
    header.innerHTML =`<img src="https://cdn.pixabay.com/photo/2017/11/07/00/22/guitar-2925282_1280.jpg" alt="">`;
    title.innerHTML =`Guitar`;
    description.innerHTML =`Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
    dolore nihil odit delectus similique rerum eaque tempore, fugit aut ipsam eos tempora veniam. Adipisci
    omnis hic saepe dolor quis quidem?`;
    profileImg.innerHTML =`<img src="https://randomuser.me/api/portraits/men/36.jpg" alt="">`;
    sellerName.innerHTML =`John random`;
    sellerPrice.innerHTML =`Price : 5000 $`;
    animatedBg.forEach(el=>el.classList.remove("animated_bg"));
    animatedText.forEach(el=>el.classList.remove("animated_Text"));
}
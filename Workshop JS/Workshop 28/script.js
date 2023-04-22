const slideContainer = document.querySelector(".slider_container");
const sliderRight = document.querySelector(".right_content");
const sliderLeft = document.querySelector(".left_content");
const upBtn = document.querySelector(".up_button");
const downBtn = document.querySelector(".down_button");



//จำนวนภาพ slide
let slideCount = sliderRight.querySelectorAll("div").length;

let activeIndex = 0;

upBtn.addEventListener("click", () => changeImage("up"));
downBtn.addEventListener("click", () => changeImage("down"));

function changeImage(direction) {
    const slideHight = slideContainer.clientHeight;
    if (direction == "up") {
        activeIndex++;
        if (activeIndex > slideCount - 1) {
            activeIndex = 0;
        }
    } else if (direction == "down") {
        activeIndex--;
        if (activeIndex < 0) {
            activeIndex = slideCount - 1;
        }
        
    }
    sliderLeft.style.transform = `translateY(-${activeIndex * slideHight}px)`;
    sliderRight.style.transform = `translateY(-${activeIndex * slideHight}px)`;
}
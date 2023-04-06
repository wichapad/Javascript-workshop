
const contents = document.querySelectorAll(".content");

document.addEventListener('scroll', showText);

function showText() {
    contents.forEach((section) => {
        const imageEL = section.querySelector("img");
        const textEL = section.querySelector(".text");

        //ขนาดรูปภาพ example 500 px + ตำแหน่งสูงสุดของภาพ 100 / สัดส่วนของภาพ 50
        // 500 + (100/50) = 502
        // 502 แสดงข้อความ
        const scrollPosition = window.pageYOffset;
        const textPosition = imageEL.offsetTop + imageEL.offsetHeight / 50

        if (scrollPosition > textPosition) {
            //แสดงเนื้อหา
            textEL.classList.add("show_reveal");
        } else {
            //ปิดเนื้อหา
            textEL.classList.remove("show_reveal");
        }
    });
}

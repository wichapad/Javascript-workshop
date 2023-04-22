const container = document.getElementById("container");
const imgs = document.querySelectorAll("#container img");
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let imageId = 0;

let interval = setInterval(slide, 2000);

function slide() {
    imageId++;
    changeImage();
}

function changeImage() {

    if (imageId > imgs.length - 1) {
        imageId = 0;
    } else if (imageId < 0) {
        imageId = imgs.length - 1;
    }

    container.style.transform = `translateX(${-imageId * 500}px)`;
}

prev.addEventListener("click", () => {
    imageId--;
    changeImage();
    resetInterval();
});

next.addEventListener("click", () => {
    imageId++;
    changeImage();
    resetInterval();
})

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(slide, 2000);
}
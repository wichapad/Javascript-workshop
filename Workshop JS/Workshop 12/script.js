const imagesContainer = document.getElementById("images_container");

const count = 10;
const apiKey = 'QTo24r7C74uJypJOP8rLodxGgS-m4ba6B_9lxOJPV7k';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

let photoArrays = [];

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photoArrays = await response.json();
        displayImages();
    } catch (err) {
        console.log(err);
    }
}

function displayImages() {
    photoArrays.forEach((photo) => {
        const item = document.createElement("a");
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');

        const img = document.createElement('img')
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('title', photo.alt_description);
        img.setAttribute('alt', photo.alt_description);

        item.appendChild(img);
        imagesContainer.appendChild(item);

    });
}

getPhotos();

window.addEventListener('scroll', () => { //คำนวณขนาดหน้าจอและเนื้อหาด้านใน
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        //ดึงข้อมูลมาแสดงผล
        getPhotos();
    }
});
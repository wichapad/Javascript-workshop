const review = document.querySelector(".review");
const imageUser = document.querySelector(".image_user");
const userName = document.querySelector(".user_name");
const userJob = document.querySelector(".user_job");


const userdata = [
    {
        name: "พิมลี่พลอย",
        job: "พนักงานประจำ",
        text: "อากาศดี อาหารอร่อย ห้องพักสะอาดมาก",
        image: "https://randomuser.me/api/portraits/women/86.jpg"
    },
    {
        name: "ก้อง รักสยาม",
        job: "โปรแกรมเมอร์",
        text: "อากาศดีมากครับ อาหารสะอาดอร่อย เจ้าของร้านใจดีมาก จะมาอุดหนุนใหม่นะครับ",
        image: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
        name: "พี่ตูนคนหล่อ",
        job: "รับราชการ",
        text: "อาหารสะอาดอร่อย วิวที่ร้านสวยมาก เจ้าของร้านใจดีและอากาศดีมากครับ ",
        image: "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
        name: "พี่โจโจ้",
        job: "นักเขียน",
        text: "อาหารอร่อย วิวสวย แต่ที่จอดรถน้อยไปหน่อย!",
        image: "https://randomuser.me/api/portraits/men/14.jpg"
    },
    {
        name: "น้องตั๊กแตน",
        job: "พนักงานโรงแรม",
        text: "ราคาเป็นกันเอง อาหารโคตรอร่อย เจ้าของร้านและพนักงานน่ารัก",
        image: "https://randomuser.me/api/portraits/women/33.jpg"
    }
];

activeIndex = 0;

function showReview() {
    const { name, job, text, image } = userdata[activeIndex];

    review.innerHTML = text;
    imageUser.src = image;
    userName.innerHTML = name;
    userJob.innerHTML = job;
    activeIndex++;

    if (activeIndex > userdata.length - 1) {
        activeIndex = 0;
    }
}

setInterval(showReview, 10000);

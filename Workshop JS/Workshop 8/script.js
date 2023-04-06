const musicCon = document.getElementById("music_container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progressCon = document.getElementById("progress_container");
const progress = document.getElementById("progress");
const title = document.getElementById("title");
const cover = document.getElementById("cover");


const songs = ["Contra", "HavestMoon", "Mario"];
let index = 0;

function loadSongs(song) {
    title.innerText = `Name: ${song}.mp3`;
    cover.src = `cover/${song}.jpg`;
    audio.src = `music/${song}.mp3`;
}

loadSongs(songs[index])

playBtn.addEventListener("click", () => {
    const isPlay = musicCon.classList.contains("play"); //เช็คว่ากดปุ่ม play หรือไม่  

    if (isPlay) {
        pauseSong(); //ถ้าเป็นจริงให้หยุด
    } else {
        playSong(); //ถ้าไม่ ให้เล่นต่อ
    }
})

function playSong() {
    musicCon.classList.add("play");
    playBtn.querySelector("i.fa-solid").classList.remove("fa-play");
    playBtn.querySelector("i.fa-solid").classList.add("fa-pause");
    audio.play();
}
function pauseSong() {
    musicCon.classList.remove("play");
    playBtn.querySelector("i.fa-solid").classList.remove("fa-pause");
    playBtn.querySelector("i.fa-solid").classList.add("fa-play");
    audio.pause();
}

prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = songs.length - 1;
    }
    loadSongs(songs[index]);
    playSong();
})

nextBtn.addEventListener("click", nextSong)

function nextSong() {
    index++;
    if (index > songs.length - 1) {
        index = 0
    }
    loadSongs(songs[index]);
    playSong();
}

audio.addEventListener("timeupdate", updateProgress);

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100; //เวลาปัจจุบัน / เวลาทั้งหมด * 100(width จาก css)
    progress.style.width = `${progressPercent}%`;
}

progressCon.addEventListener("click", setProgress);

function setProgress(e) {
    const width = this.clientWidth; //ดึงเอาความกว้างมาใช้
    const clickX = e.offsetX; //ตำแหน่งที่ทำการคลิ๊ก
    const duration = audio.duration; //ดึงความยาวสูงสุดที่อยู่ในเพลง
    audio.currentTime=(clickX / width) * duration; //การกำหนดเวลาปัจจุบันในการเล่นเสียง ผ่านการคลิ๊กในตัว progress
}

audio.addEventListener("ended",nextSong)
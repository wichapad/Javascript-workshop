const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");

const apiURL = "https://api.lyrics.ovh/"; // ส่งคำขอไปที่ api

form.addEventListener('submit', e => {
    e.preventDefault();
    const songtxt = search.value.trim();

    if (!songtxt) {
        alert("ป้อนข้อมูลไม่ถูกต้อง");
    } else {
        searchLyrics(songtxt);
    }
});
//ดึงข้อมูลจาก api
async function searchLyrics(songs) {
    const res = await fetch(`${apiURL}/suggest/${songs}`);
    const allSongs = await res.json();
    showData(allSongs);
}
// นำข้อมูลที่ดึงมาแสดงผล ในหน้าเว็บ
function showData(songs) {
    result.innerHTML = `
    <ul class="songs">
        ${songs.data.map(song =>
        `<li>
            <span>
                <strong>${song.artist.name}</strong> - ${song.title}
            </span>
            <button class="btn"
             data-artist="${song.artist.name}"
             data-song="${song.title}"
            >เนื้อเพลง</button>
            </li>`
    ).join("")}
    </ul>
    `;
    if (songs.next || songs.prev) { //สร้างปุ่ม next,prev
        more.innerHTML = `
        ${songs.prev ? `<button class="btn" onclick="getMoreSongs('${songs.prev}')">prev</button>` : ''}
        ${songs.next ? `<button class="btn" onclick="getMoreSongs('${songs.next}')">next</button>` : ''}
        `
    } else {
        more.innerHTML = '';
    }


};

async function getMoreSongs(songsUrl) {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${songsUrl}`);
    const allSongs = await res.json();
    showData(allSongs);
}

result.addEventListener("click", e => {
    const clickEl = e.target;

    if (clickEl.tagName == "BUTTON") {
        const artist = clickEl.getArrribute("data-artist");
        const songName = clickEl.getArrribute("data-song");

        getLyrics(artist, songName)
    }
})

async function getLyrics(artist, songName) {
    const res = await fetch(`${apiURL}/v1/${artist}/${songName}`);
    const data = await res.json();
    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g,"<br>");

    if (lyrics) {
        result.innerHTML = `
        <h2>
            <span>
                <strong>${artist}</strong> - ${songName}
            </span>
        </h2>
        <span>${lyrics}</span>
                 
        `;
    } else {
        result.innerHTML = `
        <h2>
            <span>
                <strong>${artist}</strong> - ${songName}
            </span>
        </h2>
        <span>No found</span> 
        `;
    }

    more.innerHTML='';
}
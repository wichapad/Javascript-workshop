const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

const text = "Hello World";
let speed = 300 / speedEl.value;

let chalacterId = 1;

writeText();

function writeText() {
    textEl.innerText = text.slice(0, chalacterId);
    chalacterId++;
    if (chalacterId > text.length) {
        chalacterId = 1;
    }

    setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => {
    speed = 300 / e.target.value;
})
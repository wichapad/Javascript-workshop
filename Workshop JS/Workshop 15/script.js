const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");

const count = document.getElementById("count");
const total = document.getElementById("total");

const movieSelect = document.getElementById("movie");

let price = + movieSelect.value;


container.addEventListener("click", e => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");
        updateselected();
    }
})


movieSelect.addEventListener('change', e => {
    price = +e.target.value;
    setMoviesData(e.target.selectedIndex, e.target.value);
    updateselected();
})
function updateselected() { //เก็บข้อมูลที่นั่ง
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const countseats = selectedSeats.length;
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
    count.innerText = countseats;
    total.innerText = countseats * price;
}

function setMoviesData(movieIndex, moviesPrice) { //เก็บข้อมูลหนัง
    localStorage.setItem("movieIndex", movieIndex);
    localStorage.setItem("moviePrice", moviesPrice);
}

function showDataToUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    const selectmovieIndex = localStorage.getItem("movieIndex"); //ตำแหน่งหนังที่เรากดจองไว้
    seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
            seat.classList.add("selected");
        }
    });
    if (selectmovieIndex != null) {
        movieSelect.selectedIndex = selectmovieIndex;
    }
}

showDataToUI();
updateselected();
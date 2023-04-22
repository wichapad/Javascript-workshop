let city = "bangkok";
const apiKey = "04d1463bba42bc6026693fb220e5646c"

const form =document.getElementById("form");
const search =document.getElementById("search");




function setData() {
    showWeather();
}

async function showWeather() {
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const res = await fetch(apiUrl);
        const data = await res.json();
        showData(data)

    } catch (error) {
        console.log(error);
    }
}

function showData(data) {
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const weather = document.getElementById("weather");
    const status = document.getElementById("status");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    city.innerText = data.name;
    state.innerText = data.sys.country
    weather.children[0].innerHTML = calculate(parseInt(data.main.temp)) + " C&deg;";
    weather.children[1].innerHTML = 'max : ' + calculate(parseInt(data.main.temp_max)) + " C&deg;" + " min : " + calculate(parseInt(data.main.temp_min)) + " C&deg;";
    status.innerText = data.weather[0].main;
    humidity.innerText = "Humidity : " + data.main.humidity;
    wind.innerText = "Wind : " + data.wind.speed;
}

function calculate(k) {
    return k - 273;
}

function callDataApi(e) {
    e.preventDefault();
    city = search.value;
    showWeather();
}

form.addEventListener('submit',callDataApi);
setData()
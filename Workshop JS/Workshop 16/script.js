const content = document.getElementById("content");
const dropdown =document.getElementById("years");
const apiKey = '20a3b2db64569377dafa9b2c6094e31f';
let years = "2023";
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&year=${years}`;
const urlPoster =`https://image.tmdb.org/t/p/w500/`; // url ดึง ภาพ poster


async function displayMovies(url) {
    const res = await fetch(url);
    const movies = await res.json();

    while (content.firstChild) { //เคลียร์ค่า div เก่า เพื่อจะแทนที่ด้วย div ใหม่
        content.removeChild(content.firstChild);
    }

    movies.results.forEach(data => {
        const moviesEL = document.createElement("div");
        moviesEL.classList.add("movie")
        const title = document.createElement("h2");
        title.innerHTML=`${data.title.substring(0,24)}`;
        const poster = document.createElement("img");
        poster.src=`${urlPoster}${data.poster_path}`;


        moviesEL.appendChild(title);
        moviesEL.appendChild(poster);
        content.appendChild(moviesEL);

    });
    
}

dropdown.addEventListener("change",()=>{
    years = dropdown.value;
    const updateUrl =`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&year=${years}`;
    displayMovies(updateUrl);
})

displayMovies(url);
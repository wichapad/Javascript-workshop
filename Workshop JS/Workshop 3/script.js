const switcToggle = document.querySelector('input[type="checkbox"]');
const toggleIcons = document.getElementById("toggle_icons");
const navbar = document.getElementById("nav");

const image1 = document.getElementById("image_1");
const image2 = document.getElementById("image_2");
const image3 = document.getElementById("image_3");
function switchMode(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark")
        darkMode();
        imageSwitchMode("dark")
    } else {
        document.documentElement.setAttribute("data-theme", "light")
        lightMode();
        imageSwitchMode("light")
    }
}

function darkMode() {
    toggleIcons.children[0].textContent = "Dark mode";
    toggleIcons.children[1].classList.replace("fa-sun", "fa-moon");
    navbar.style.backgroundColor = "rgba(0,0,0,50%)";
}
function lightMode() {
    toggleIcons.children[0].textContent = "Light mode";
    toggleIcons.children[1].classList.replace("fa-moon", "fa-sun");
    navbar.style.backgroundColor = "rgba(255,255,255,50%)";
}

function imageSwitchMode(mode) {
    image1.src = `/Workshop 3/image/undraw_programming_re_kg9v_${mode}.svg`
    image2.src = `/Workshop 3/image/undraw_design_team_re_gh2d_${mode}.svg`
    image3.src = `/Workshop 3/image/undraw_videographer_h6l3_${mode}.svg`
}

switcToggle.addEventListener("change", switchMode)

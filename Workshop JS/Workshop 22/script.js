const categories = document.querySelectorAll(".category");


window.addEventListener('scroll', showCategory);

function showCategory() {
    const calculateHight = window.innerHeight - 20;

    categories.forEach(category => {
        const topPosition = category.getBoundingClientRect().top;
        if (topPosition < calculateHight) {
            category.classList.add("active");
        }else{
            category.classList.remove("active");
        }
    })
}


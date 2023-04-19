const toggle = document.getElementById("toggle");

const openForm = document.getElementById("open");
const modal = document.getElementById("modal");
const closeForm = document.getElementById("close");

toggle.addEventListener('click',()=>{
    document.body.classList.toggle("show_nav");
})

openForm.addEventListener('click',()=>{
    modal.classList.add("show_modal")
})

closeForm.addEventListener('click',()=>{
    modal.classList.remove("show_modal")
})

window.addEventListener('click',e => e.target == modal ? modal.classList.remove("show_modal") : false)
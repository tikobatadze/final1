let btn = document.querySelector(".hamburger")
let menu = document.querySelector(".hamburger-menu")



btn.addEventListener("click" , () => {
    if(menu.classList.contains("open")) {
        menu.classList.remove("open");
    }
    else{
        menu.classList.add("open");
    }
})
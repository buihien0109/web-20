const hamburgerIconEl = document.querySelector('.hamburger-icon');
const menuEl = document.querySelector(".menu");
const menuInnerEl = document.querySelector(".menu-inner");
const btnCloseMenu = document.querySelector("#btn-close-menu");
const overlayEl = document.querySelector("#overlay")

// Toggle menu

// let isToggleMenu = false
// hamburgerIconEl.addEventListener('click', function() {
//     let height = menuInnerEl.clientHeight;
//     isToggleMenu = !isToggleMenu;
//     menuEl.style.height = isToggleMenu ? `${height}px` : "0px";
// })

// Toggle menu sidebar
let isToggleMenu = false
hamburgerIconEl.addEventListener('click', toggleMenu)
btnCloseMenu.addEventListener('click', toggleMenu)

function toggleMenu() {
    isToggleMenu = !isToggleMenu;
    if(isToggleMenu) {
        menuEl.classList.add("toggle-menu");
        overlayEl.classList.add("show");
    } else {
        menuEl.classList.remove("toggle-menu");
        overlayEl.classList.remove("show");
    }
}

overlayEl.addEventListener("click", toggleMenu)

window.addEventListener('resize', function() {
    let width = this.document.body.clientWidth;
    if(width > 768) {
        isToggleMenu = false
        menuEl.classList.remove("toggle-menu"); 
        overlayEl.classList.remove("show");
    }
})


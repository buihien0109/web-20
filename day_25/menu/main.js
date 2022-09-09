const btn = document.querySelector('.hamburger-icon span');
const menuEl = document.querySelector('.menu')
const navEl = document.querySelector("nav")

// Ẩn - Hiện nhưng không mượt
// btn.addEventListener('click', function() {
//     menuEl.classList.toggle("show")
// })


// Ẩn - Hiện nhưng mượt
let isShow = false
btn.addEventListener('click', function() {
    // const height = navEl.clientHeight;
    const height = 270;

    isShow = !isShow
    isShow ? menuEl.style.height = `${height}px` : menuEl.style.height = "0px"
})
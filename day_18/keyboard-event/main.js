// keydown : Nhấn phím xuống
// keyup : Nhả phím ra
// keypress : Giữ phím

// document.addEventListener("keydown", function (event) {
//     if(event.keyCode == 13) {
//         console.log('Bạn rất đẹp trai');
//     } else {
//         console.log('Bấm phím Enter đi, có điều bất ngờ đó !!!');
//     }
// });

// document.addEventListener("keyup", function () {
//     console.log("keyup");
// });

// document.addEventListener("keypress", function () {
//     console.log("keypress");
// });

// === Sự kiện scroll ===
const btn = document.getElementById("btn");

window.addEventListener("scroll", function (e) {
    console.log("scroll");
    if (document.documentElement.scrollTop > 300) {
        btn.classList.remove("hide");
    } else {
        btn.classList.add("hide");
    }
});

// Nhấn nút TOP để quay về đầu trang
btn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

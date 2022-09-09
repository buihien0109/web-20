// Giá trị mặc định của `counter` ban đầu = `0`

// Bấm vào `Cộng` tăng counter lên 1

// Bấm vào `Trừ` giảm counter đi 1

// - Nếu `counter > 0` có màu `green`
// - Nếu `counter = 0` có màu `#333333`
// - Nếu `counter < 0` có màu `red`

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
let h1 = document.getElementById("counter");

let count = 0;

prevBtn.addEventListener("click", function () {
    count--;
    changeColor(count)
});
nextBtn.addEventListener("click", function () {
    count++;
    changeColor(count)
});

function changeColor(count) {
    h1.innerText = count;
    if (count > 0) {
        h1.style.color = "green";
    } else if (count == 0) {
        h1.style.color = "#333333";
    } else {
        h1.style.color = "red";
    }
}

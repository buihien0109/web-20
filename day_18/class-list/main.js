const heading = document.getElementById("heading");

console.log(heading.classList);
console.log(heading.classList.length);
console.log(heading.classList[0]);

// Thêm class
heading.classList.add("text-big", "text-center");

// Xóa class
heading.classList.remove("text-big", "text-center");

// contains : Kiểm tra 1 class có tồn tại trong phần tử hay không => true/false
console.log(heading.classList.contains("text-big"));
console.log(heading.classList.contains("text-red"));

// toggle : Kiểm tra 1 class có tồn tại trong phần tử hay không
// Nếu có => xóa đi
// Nếu không => thêm vào

// setInterval : Thực hiện lặp đi lặp lại 1 công việc, sau 1 khoảng thời gian được chỉ định (tính bằng ms)
// let count = 0;
// let interval = setInterval(function () {
//     // Công việc sẽ được lặp lại
//     heading.classList.toggle("text-red");
//     count++;

//     if (count == 10) {
//         // Xóa setInterval
//         clearInterval(interval);
//     }
// }, 100); // 1000ms = 1s

let time = 10;
let interval = setInterval(function () {
    // Giảm thời gian đi 1
    time--;

    // Cập nhật lên trên giao diện
    document.querySelector("#time span").innerText = time;

    // Nếu thời gian = 0 thì dừng đếm ngược
    if (time == 0) {
        clearInterval(interval);
        heading.classList.remove("text-hide");
        document.querySelector("#time").classList.add("text-hide");
    }
}, 1000);

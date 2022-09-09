document.addEventListener("mousemove", function (event) {
    // Xóa tất hình trong đi sau đó mới tạo
    const boxes = document.querySelectorAll('.box')
    Array.from(boxes).map(box => document.body.removeChild(box))

    // Tạo thẻ div
    const box = document.createElement("div");

    // Thêm class box cho thẻ div vừa tạo
    box.classList.add("box");

    // Cập nhật vị trí tại nơi ấn chuột
    box.style.top = `${event.offsetY - 50}px`;
    box.style.left = `${event.offsetX - 50}px`;

    // Gắn vào DOM
    document.body.appendChild(box);
});

// document.addEventListener('mousedown', function() {
//     console.log('mousedown');
// })

// document.addEventListener('mouseup', function() {
//     console.log('mouseup');
// })

// document.addEventListener('mousemove', function() {
//     console.log('mousemove');
// })

// Câu 1. Tạo 1 thẻ p có id="text", có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

// - Đặt màu văn bản thành `#777`
// - Đặt kích thước phông chữ thành `2rem`
// - Đặt nội dung HTML thành `Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.`

const text = document.getElementById("text");

text.style.color = "#777";
text.style.fontSize = "2rem";
text.innerHTML =
    "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.";

// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu `blue` (tạo thẻ ul-li bằng html)

// <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
// </ul>

const ul1 = document.querySelector("ul");
const liEle = ul1.querySelectorAll("li");
liEle.forEach((li) => (li.style.color = "blue"));

// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):

// <ul id="list">
//    <li>Item 1</li>
//    <li>Item 2</li>
//    <li>Item 3</li>
//    <li>Item 4</li>
//    <li>Item 5</li>
//    <li>Item 6</li>
//    <li>Item 7</li>
// </ul>

// Sử dụng javascript để thực hiện những công việc sau

// 1. Thêm 3 thẻ `<li>` có nội dung **Item 8**, **Item 9**, **Item 10** vào cuối danh sách
const addLi = document.querySelector("#list");
for (let i = 8; i <= 10; i++) {
    let li = document.createElement("li");
    li.innerText = `Item ${i}`;
    addLi.appendChild(li);
}

// 2. Sửa nội dung cho thẻ `<li> 1` thành màu đỏ (color)
const li1 = document.querySelector("#list li:nth-child(1)");
li1.style.color = "red";

// 3. Sửa background cho thẻ `<li> 3` thành màu xanh (background-color)
const li3 = document.querySelector("#list li:nth-child(3)");
li3.style.backgroundColor = "blue";

// 4. Remove thẻ `<li> 4`
const li4 = document.querySelector("#list li:nth-child(4)");
addLi.removeChild(li4);

// 5. Thêm thẻ `<li>` mới thay thế cho thẻ `<li> 4` bị xóa ở bước trước, thẻ `<li>` mới có nội dung bất kỳ
const liFour = document.createElement("li");
liFour.innerHTML = "thẻ li 4";
li3.insertAdjacentElement("afterend", liFour);

// Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).
// Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)

const list = document.querySelector("#list");
const add = document.createElement("button");
add.innerText = "add";
document.body.insertBefore(add, list);

const input = document.createElement("input");
input.type = "text";
input.placeholder = "nhập thông tin";
add.insertAdjacentElement("afterend", input);

add.addEventListener("click", () => {
    const text = input.value;
    if (text == "") {
        alert("chưa nhập thông tin");
    } else {
        const li = document.createElement("li");
        li.innerText = text;
        list.appendChild(li);

        input.value = "";
        input.focus();
    }
});

// Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul

const remove = document.createElement("button");
remove.innerText = "remove";
list.insertAdjacentElement("afterend", remove);

remove.addEventListener("click", () => {
    const liLast = document.querySelector("#list li:last-child");
    if(liLast) {
        list.removeChild(liLast);
    }
});

// Thêm 1 nút Hide trên đầu của danh sách ul
// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide

const btnShow = document.querySelector(".btn--show");
const btnHide = document.querySelector(".btn--hide");

btnHide.addEventListener("click", () => {
    list.classList.toggle("btn--show");
    btnShow.classList.toggle("btn--show");
    btnHide.classList.toggle("btn--show");
});
btnShow.addEventListener("click", () => {
    list.classList.toggle("btn--show");
    btnShow.classList.toggle("btn--show");
    btnHide.classList.toggle("btn--show");
});

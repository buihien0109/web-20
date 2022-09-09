// Bài 1: Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = "yellow")

// bài 2: Thêm link hiển thị text "facebook" link đến trang facebook.com ở sau thẻ p

// bài 3. Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ

// Bài 4: thay thế các ký hiệu ? => 🤔, ! => 😲

const pElement = document.querySelector("p");
console.log(pElement.innerText);

// chuyển nội dung p sang mảng các chữ cái và kí tự
const strings = pElement.innerText.split("");

// lọc các kí tự . ! ? , ra khỏi mảng
const filterArray = Array.from(strings).filter(
    (string) => string != "." && string != "!" && string != "?" && string != ","
);
// hợp mảng lại thành đoạn văn rồi chuyển tiếp sang mảng các từ, ngăn cách bởi dấu cách
const chuCai = filterArray.join("").split(" ");
console.log(chuCai);

// tìm các từ có độ dài >= 8
const newArray = Array.from(chuCai).filter((item) => item.length >= 8);

// tạo function để highlight từ, tham số là từ
// tạo 
function highlight(item) {
    // tìm vị trí của từ đó
    let index = pElement.innerHTML.indexOf(item);
    if (index >= 0) {
        // gán lại nội dung của p
        pElement.innerHTML =
            // nếu có từ đó thì cắt từ đầu chuỗi đến từ đó
            pElement.innerHTML.slice(0, index) + //tạo
            // bắt đầu từ đó đến kết thúc từ ta bọc bằng thẻ span
            // với class highlight tạo sẵn có background = yellow
            '<span class="highlight">' +
            pElement.innerHTML.slice(index, index + item.length) + //function
            "</span>" +
            // cắt phần còn lại
            pElement.innerHTML.slice(index + item.length); // để highlight từ, tham số là từ
    }
}

// Lặp qua mảng các từ có độ dài >= 8 để highlight các từ đó
newArray.forEach((item) => {
    highlight(item);
});

console.log(newArray);

const facebook = document.createElement("a");

facebook.href = "https://www.facebook.com/";
facebook.textContent = "facebook";
facebook.style.display = "block";

pElement.appendChild(facebook);

const numberOfString = document.createElement("div");
numberOfString.textContent = "số từ có trong đoạn văn: " + chuCai.length;
pElement.appendChild(numberOfString);

pElement.innerHTML = pElement.innerHTML.replaceAll("?", "🤔");
pElement.innerHTML = pElement.innerHTML.replaceAll("!", "😲");

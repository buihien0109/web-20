const heading = document.getElementById("heading");

// console.log(heading);

const paras = document.getElementsByTagName("p");

// console.log(paras);
// console.log(paras.length);
// console.log(paras[0]);

// for(let i = 0; i < paras.length; i++) {
//     console.log(paras[i]);
// }

// Array.from(paras).map(ele => console.log(ele))

// ? Tìm hiểu HTML Collection

const parasClassName = document.getElementsByClassName("para");

// console.log(parasClassName);

// querySelector
const headingSelector = document.querySelector("#heading");
// console.log(headingSelector);

const para2 = document.querySelector(".para");
// console.log(para2);

// :nth-child(4).para
// p:nth-child(4)
// .para + p
// .para ~ p
// p:nth-of-type(3)

const para3 = document.querySelector("p:nth-of-type(3)");
// console.log(para3);

// .box ~ ul
// .box + ul
// ul:nth-child(6)
// body > ul

const ul2 = document.querySelector("body > ul");
// console.log(ul2);

// li:last-child
// li:nth-of-type(4)
// li:nth-child(4)
// .box > ul > li:last-of-type
// .box ul li:last-child

const li44 = document.querySelector(".box ul li:last-child");
// console.log(li44);

// Tìm kiếm trong 1 element cụ thể
const box = document.querySelector(".box");
const li44Other = box.querySelector("li:last-child");
// console.log(li44Other);

// document.querySelectorAll
const parasSelectorAll = document.querySelectorAll("p");
// console.log(parasSelectorAll); // => NodeList

// Mối quan hệ giữa các phần tử
// console.log(box.parentElement);
// console.log(box.children);
// console.log(box.previousElementSibling);
// console.log(box.nextElementSibling);

// console.log(document.body.childNodes);
// console.log(box.parentNode);
// console.log(box.childNodes);
// console.log(box.previousSibling);
// console.log(box.nextSibling);

// GET
// console.log(heading.innerHTML);
// console.log(heading.innerText);
// console.log(heading.textContent);

const ul1 = document.querySelector(".box ul");
// console.log(ul1.innerHTML);
// console.log(ul1.innerText);
// console.log(ul1.textContent);

// style="color:red; background-color:black;"
heading.innerHTML = "Xin chào các bạn";
heading.innerHTML = `<span>Xin chào các bạn 1</span>`;

heading.style.color = "red";
heading.style.backgroundColor = "black";

para2.innerText = "Para2 new content";
para3.textContent = "Para3 new content";

// Tạo phần tử
const paraNew = document.createElement("p");
paraNew.innerText = "New para";
console.log(paraNew);

//
// document.body.prepend(paraNew)
// heading.parentElement.prepend(paraNew)
// document.body.appendChild(paraNew)
document.body.insertBefore(paraNew, para3);

// ? Tạo thẻ a link đến trang google.com ở đằng sau thẻ para 3

const link = document.createElement("a");
link.innerText = "Google.com";
link.href = "https://google.com";
link.target = "_blank";

// box.insertAdjacentElement('beforeBegin', link)
// para3.insertAdjacentElement("afterEnd", link)

box.insertAdjacentHTML(
    "beforeBegin",
    `<a href="https://google.com" target="_blank">Google.com</a>`
);

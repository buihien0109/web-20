// Định nghĩa function

function sayHello() {
    console.log("Xin chào các bạn");
}

// Thực thi function
sayHello();

// Định nghĩa function với tham số
function sayHelloWithName(name = "Ngô B") {
    console.log(`Xin chào ${name}`);
}

sayHelloWithName("Phạm Văn Thiên");
sayHelloWithName("Bùi Hiên");
sayHelloWithName();

let name = "Nguyễn Văn A";
sayHelloWithName(name);

// Viết function in ra message
// "Xin chào -name- . Năm nay -age- tuổi"

function getInfo(name, year) {
    sayHelloWithName(name);
    console.log(`Xin chào ${name}. Năm nay ${2021 - year}`);
}
getInfo("Bùi Hiên", 1997);

// Tính tổng 2 số a và b
function sum(a = 10, b = 20) {
    let result = a + b;
    return result;
}

// Thực thị
let data = sum(3, 4); // => 7
console.log(data);

let data1 = sum(data, 10);
console.log(data1);

{
    let number = 10;
    console.log(number, number + 10);
}

console.log(sum(3));
console.log(sum());

// Boolean
// let a = true;
// let b = false;
// let c = !a;
// let d = !b;

// console.log(a, b, c, d);

let a = 5;
console.log(Boolean(a));

console.log(Boolean(5 > 10));
console.log(Boolean(5 < 10));
console.log(Boolean(sum(3, 4)));

// Câu lệnh if
let hour = 6;
if (hour < 10) {
    console.log("Good morning");
}

let age = 15;
// if(age < 18) {
//     console.log("Tuổi teen");
// } else {
//     console.log("Tuổi trưởng thành");
// }

function getAge(age) {
    if (age < 18) {
        console.log("Tuổi teen");
    } else if (age >= 18 && age < 50) {
        console.log("Tuổi trưởng thành");
    } else {
        console.log("Tuổi già");
    }
}

getAge(16);
getAge(40);
getAge(80);

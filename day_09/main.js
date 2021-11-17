console.log("Xin chào");

// Khai báo biến
let number;
console.log(number);

number = 10;
console.log(number);

// Vừa khai báo biến vừa khởi tạo giá trị
let email = "hien@techmaster.vn";

// Khai báo biến sử dụng const
const pi = 3.14;
console.log(pi);

//Kiểm tra kiểu dữ liệu của 1 biến
console.log(typeof number); // -> "number"
console.log(typeof email); // -> "string"

let age;
console.log(typeof age); // -> "undefined"

age = 30;
console.log(typeof age); // -> "number"

age = "40";
console.log(typeof age); // -> "string"

// String
// Khai báo string rỗng
let strEmpty = "";

let firstName = "Nguyễn";
let lastName = "An";
let fullName = firstName + " " + lastName;
console.log(fullName);

let message = '"Hà nội" hôm nay trời đẹp lắm'
console.log(message);

// Template string
// ``
// Cho phép truyền biến, biểu thức ,giá trị, ...

let message1 = `"Hà nội" hôm nay trời đẹp lắm`
console.log(message1);

let year = 1990
let text = `Xin chào ${fullName}. Năm nay ${2021 - year} tuổi`
console.log(text);

// Number
let num1 = 10
let num2 = 3

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

// math object
// Math.min, Math.min, Math.round(), floor(), ceil(), random()
console.log(Math.PI);

// Kết hợp string + number
console.log("hello" + 1); // "hello" + "1"
console.log("4" - 1); // 4 - 1
console.log("4" - "1"); // 4 - 1
console.log("hello" - 1); // NaN : Not a Number

console.log("4" * "2")
console.log("4" / "2")

console.log(4 ** "2")

console.log(4 + "5")
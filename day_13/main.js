// ====== Bài tập về nhà ======

/* 
Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

Ví dụ:
- checkStringExist("i love you", "you") => true
- checkStringExist("i love you", "hate") => false
*/

/*
Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên

Ví dụ:
- shortenString("Xin chào các bạn") => "Xin chào..."
- shortenString("hello') => "hello"
*/

/*
Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.

Ví dụ
- "Race car" => true,
- "hello world" => false.
*/

/*
Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).
Ví dụ
- 53751 -> 13557
- 14350 -> 10345
- 203950 -> 200359
*/

/*
Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường
Ví dụ:
- "HELLO world" => "hello_world"
- "Xin Chào Các BẠN" => "xin_chào_các_bạn"
*/

// ====== Kiểm tra bài cũ ======

/*
Trình bày về cách phương thức string (string methods)
- Tác dụng
- Cú pháp
- Ví dụ

1. indexOf, lastIndexOf, includes

2. slice, substring, substr, concat

3. startsWith, endsWith, toLowerCase, toUpperCase

4. replace, trim, charAt, split
*/

// Array
let arr = []
arr[0] = 1
arr[1] = "hello"
arr[2] = true

console.log(arr);

let number = [1,2,3,4,5]
console.log(number);

console.log(number[0]);
console.log(number[4]);
console.log(number[number.length - 1]);

let number1 = number
// number1[0] = 10

console.log(number1);
console.log(number);

// So sánh
let number2 = [1,2,3,4,5]
console.log(number2);

console.log(number == number1);
console.log(number == number2);
console.log(number1 == number2);
console.log(number == "1,2,3,4,5");

// Duyệt mảng
// let sum = 0
// for(let i = 0; i < number.length; i++) {
//     sum = sum + number[i]
// }

// console.log(sum);

let sum = 0
for(let i = 0; i < number.length; i++) {
    if(number[i] % 2 == 1) {
        sum += number[i]
    }
}

console.log(sum);

function check(arr) {
    // Bước 1: Kiểm tra mảng số chẵn
    // Nếu không phải mảng chẵn => false

    // Trường hợp là mảng chẵn thì tiếp tục kiểm tra tăng dần

    // Bước 2: Kiểm tra tăng dần
}

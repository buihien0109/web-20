// ============= Bài tập =============

/*
Bài 1: Tìm số lớn nhất trong mảng
Vd: findMax([1,2,3,4,5]) => 5

Bài 2: Tìm số nhỏ nhất trong mảng
Vd: findMin([1,2,3,4,5]) => 1

Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
Vd : modulo2([4,2,5,6,2,7]) => [0,0,1,0,0,1]

Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần (Sử dụng array để làm)
Vd: repeatString('a') => 'aaaaaaaaaa'

Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang (Sử dụng array để làm)

Vd: repeatString('a') => 'a-a-a-a-a-a-a-a-a-a'
*/

// ============= Lý thuyết =============

/*
Câu 1: Trình bày lý thuyết về array?
- Array là gì?
- Khai báo array
- Truy cập vào phần tử trong array
- Viết function tính tổng các phần tử trong array

Câu 2: Trình bày hiểu biết về value type và reference type? Lấy ví dụ từng loại

Trình bày về các phương thức của array
- Tác dụng
- Cú pháp
- Ví dụ

Câu 3 : push, pop, unshift, shift

Câu 4 : slice, concat, reverse

Câu 5 : join, toString, reverse, sort

Câu 6 : indexOf, includes, splice
*/

// ============= Luyện tập =============

/*
Bài 1: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?
checkElementExist([1,2,3,4,5], 5) => true
checkElementExist([1,2,3,4,5], 6) => false

Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào
getElementGreater([1,2,3,4,5], 3) => [4,5]
getElementGreater([1,2,3,4,5], 5) => []

Bài 3: Viết function để tạo mã màu HEX ngẫu nhiên.
randomHexCode() => #728a98, #fa2847, #45a76b
randomHexCode() => #a72938, #acb87d, #123456

Bài 4: Viết function để tạo mã màu RGB ngẫu nhiên.
randomRgbCode() => rgb(213,43,133), rgb(1,1,1), rgb(123,145,167)
randomRgbCode() => rgb(12,32,122), rgb(14,112,234), rgb(23,231,1)

Bài 5. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái. 
sortStudents(['Nam', 'Hoa', 'Tuấn']) => ['Tuấn', 'Nam', 'Hoa']

Bài 6: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
shuffle([1,2,3,4,5]) => [2,3,4,1,5]
shuffle([1,2,3,4,5]) => [4,2,3,5,1]

Bài 7: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng
symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]

Bài 8: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]
*/

// =========== Arrow function ===========
// Sử dụng function expression
const sum = function (a, b) {
    return a + b;
};

// Anonymous function : function vô danh, không có tên

// Sử dụng arrow function
// Viết chuẩn
const sum1 = (a, b) => {
    return a + b;
};

// Có thể lược bỏ nếu function chỉ có 1 câu lệnh return
const sum2 = (a, b) => a + b;

const findMax = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

const findMax1 = (arr) => Math.max(...arr);

// For
let number = [1, 2, 3, 4, 5, 6];
let total = 0;

// Cách tính tổng sử dụng for
for (let i = 0; i < number.length; i++) {
    // console.log(number[i], i);
    total += number[i]
}
console.log(total);

// Cách tính tổng sử dụng forEach
let total1 = 0;
number.forEach(function (value) {
    // console.log(value, index);
    total1 += value
})
console.log(total1);

// Tính tổng sử dụng array funtion + forEach
let total2 = 0;
number.forEach((value) => total2 += value)
console.log(total2);

// For ... of
let total3 = 0;
for (const value of number) {
    // console.log(value);
    total3 += value
}

console.log(total3);

// Các biến thể khác của for : map, reduce, filter, some, every, find, findIndex
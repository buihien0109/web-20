/*
Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái. 
sortStudents(['Nam', 'Hoa', 'Tuấn']) => ['Tuấn', 'Nam', 'Hoa']

Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
shuffle([1,2,3,4,5]) => [2,3,4,1,5]
shuffle([1,2,3,4,5]) => [4,2,3,5,1]

Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng
symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]

Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]
*/

/*
Câu 1: Trình bày về first class function
Có bao nhiêu cách để khai báo function, lấy ví dụ từng loại

Câu 2: Lấy ví dụ về forEach và for .. of
*/

// Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
// Vd : modulo2([4,2,5,6,2,7]) => [0,0,1,0,0,1]

function modulo2(arr) {
    // const result = arr.map(e => e % 2)
    // return result

    return arr.map((e) => e % 2);
}

console.log(modulo2([4, 2, 5, 6, 2, 7]));

// Tìm các số lẻ trong mảng
// Cách truyền thống
function oddNumbersNotFilter(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(oddNumbersNotFilter([4, 2, 5, 6, 2, 7]));

// filter = for + if
function oddNumbers(arr) {
    // const result = arr.filter(e => e % 2 == 1)
    // return result

    return arr.filter((e) => e % 2 == 1);
}

console.log(oddNumbers([4, 2, 5, 6, 2, 7]));

// Find
function getNumberGreater5(arr) {
    return arr.find((e) => e > 5);

    // return arr.filter((e) => e > 5);
}

console.log(getNumberGreater5([1, 2, 3, 4, 5, 6, 7]));

// FindIndex
function getIndexOfNumberGreater5(arr) {
    return arr.findIndex((e) => e > 5);
}

console.log(getIndexOfNumberGreater5([1, 2, 3, 4, 5, 6, 7]));

// some : Chỉ cần 1 phần tử thỏa mãn điều kiện => true
// Nếu không phần tử nào thỏa mãn điều kiên => false
function getNumberGreater1(arr) {
    return arr.some((e) => e > 1);
}

console.log(getNumberGreater1([1, -2, -3, -4])); // false

// every: Tất cả phần tử thỏa mãn ĐK => true
// Chỉ một phần tử không thỏa mã ĐK => false
function getNumberGreater10(arr) {
    return arr.every((e) => e > 10);
}
console.log(getNumberGreater10([11, 12, 13, 14])); // true
console.log(getNumberGreater10([11, 12, 13, 5])); // false

function sum(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(sum([1,2,3,4]));

// reduce
function getTotalNumber(arr) {
    let sum = arr.reduce(function (total, elem) {
        return total + elem;
    }, 0);

    return sum
}

console.log(getTotalNumber([1,2,3,4]));
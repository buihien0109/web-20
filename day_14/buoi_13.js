// Bài 1: Tìm số lớn nhất trong mảng
// Vd: findMax([1,2,3,4,5]) => 5
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMax1(arr) {
    return Math.max(...arr); // Duỗi arr thành 1 danh sách số
}

// Bài 2: Tìm số nhỏ nhất trong mảng
// Vd: findMin([1,2,3,4,5]) => 1
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
// Vd : modulo2([4,2,5,6,2,7]) => [0,0,1,0,0,1]
function modulo2(arr) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        let a = arr[i] % 2;
        newArray.push(a);
    }

    return newArray;
}
console.log(modulo2([19, 7, 2, 4, 3]));

// Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần (Sử dụng array để làm)
// Vd: repeatString('a') => 'aaaaaaaaaa'
function repeatString(str) {
    let string = [];
    for (let i = 0; i < 10; i++) {
        string.push(str);
    }
    return string.join("");
}

// Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang (Sử dụng array để làm)

// Vd: repeatString('a') => 'a-a-a-a-a-a-a-a-a-a'
function repeatStringWithDash(str) {
    let string = [];
    for (let i = 0; i < 10; i++) {
        string.push(str);
    }
    return string.join("-");
}

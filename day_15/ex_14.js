// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.
// sortStudents(['Nam', 'Hoa', 'Tuấn']) => ['Tuấn', 'Nam', 'Hoa']
function sortStudents(arr) {
    let newArray = arr.sort((a, b) => {
       if (a > b) {
          return -1;
       } else if (a < b) {
          return 1;
       }
       return 0;
    });
    return newArray;
 }
 console.log(sortStudents(["Nam", "Hoa", "Tuấn"]));
 
 // Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
 // shuffle([1,2,3,4,5]) => [2,3,4,1,5]
 // shuffle([1,2,3,4,5]) => [4,2,3,5,1]
 function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
       // Random chỉ số
       let j = Math.floor(Math.random() * (i + 1));
 
       // Đổi vị trí
       let temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
    }
    return arr;
 }
 console.log(shuffle([1, 2, 3, 4, 5]));
 
 function shuffle1(arr) {
    return arr.sort(() => Math.random() - 0.5);
 }
 console.log(shuffle1([1, 2, 3, 4, 5]));
 
 // Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng
 // symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
 function symmetricDifference(arr1, arr2) {
    const sumArr = [...arr1, ...arr2];
    let newArr = [];
    for (const element of sumArr) {
       if (!arr1.includes(element) || !arr2.includes(element)) {
          newArr.push(element);
       }
    }
    return newArr;
 }
 
 console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));
 
 // Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
 // union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
 // union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]
 function union(arr1, arr2) {
    let newArray = [];
    const arr = [...arr1, ...arr2];
    for (let i = 0; i < arr.length; i++) {
       if (newArray.indexOf(arr[i]) === -1) {
          newArray.push(arr[i]);
       }
    }
    return newArray;
 }
 console.log(union([1, 2, 3, 1], [4, 3, 2, 4]));
 
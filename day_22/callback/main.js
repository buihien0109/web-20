// Lập trình đồng bộ

// Có 2 công việc : cv1, cv2

// Thực hiện : 3s
function funcA() {
    console.log("one");
}

// Thực hiện : 4s
function funcB() {
    console.log("two");
}

// Tổng thời gian thực hiện : 3 + 4 = 7s
// funcA()
// funcB()

// Lập trình bất đồng bộ
function funcC() {
    setTimeout(function () {
        console.log("three");
    }, 3000)
}

function funcD() {
    setTimeout(function () {
        console.log("four");
    }, 5000)
}

// Tổng thời gian thực hiện : 4s
// funcD()
// funcC()
// funcB()

// Để xử lý lập trình bất đồng bộ:
// 1. Callback function
// 2. Promise
// 3. Async await

// == 1. Callback function ==
// funcA, funcB

// function funcA(funcB) {
//     // ...
//     funcB()
// }

// let arr = [1,2,3,4]

// arr.forEach(function(value)  {
//     console.log(value);
// })

// Mô tả về hoạt đồng hằng ngày
// 1. Làm bài tập (3s)
// 2. Đá bóng (4s)
// 3. Nấu cơm (5s)

function doTask1(name, callback) {
    console.log("Bắt đầu công việc");
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback()
    }, 3000)
}

function doTask2(name, callback) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback()
    }, 4000)
}

function doTask3(name, callback) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback()
    }, 5000)
}

function finish() {
    console.log("Kết thúc công việc");
}

doTask1("Làm bài tập", function () {
    doTask2("Đá bóng", function () {
        doTask3("Nấu cơm", finish)
    })
})

// doTask1("Làm bài tập", function() {
//     console.log("Làm bài tập xong");
// })

// doTask2("Đá bóng", function() {
//     console.log("Đá bóng xong");
// })

// doTask3("Nấu cơm", function() {
//     console.log("Nấu cơm xong");
// })

// Nếu nhiều công việc => Dẫn đến tình trạng callback hell
// Để khắc phục tình trạng callback hell => Dẫn đến sự ra đời của promise (ES6)





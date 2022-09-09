// Local storage

if(typeof(Storage) !== "undefined") {
    console.log('Có hỗ trợ');
} else {
    console.log('Không hỗ trợ');
}

// Lưu
localStorage.setItem("name", "bùi hiên");
localStorage.setItem("age", "30");
localStorage.setItem("status", "true");

localStorage.setItem("numbers", "[1,2,3,4,5]")

let todos = [
    {
        id: 1,
        title: "Đi đá bóng",
        status: false
    },
    {
        id: 2,
        title: "Đi chơi với bạn",
        status: true
    },
    {
        id: 3,
        title: "Làm bài tập về nhà",
        status: true
    }
]

localStorage.setItem("todos", JSON.stringify(todos))

console.log(localStorage.getItem("name"));
console.log(JSON.parse(localStorage.getItem("numbers")));
console.log(JSON.parse(localStorage.getItem("todos")));
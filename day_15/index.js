// Object trong javascript
let emptyObject = {}

let student = {
    name : "Bùi Hiên",
    age : 25,
    year : 1997,
    address : "Thái Bình",
    sex : "male",
    "first name" : "Bùi",

    study() {
        console.log("Học bài");
    },

    eat(nameFood) {
        console.log(`Đang ăn ${nameFood}`);
    },

    talk(name) {
        console.log(`Nói chuyện với ${name}`);
    },

    doHomework(exerciseName) {
        console.log(`Làm bài tập ${exerciseName}`);
    },

    getInfo() {
        console.log(`${this.name} quê ở ${this.address}`);
    }
}

console.log(student.name);
console.log(student.age);
console.log(student["address"]);
console.log(student["first name"]);

student.study()
student.eat("Cơm")
student.talk("Nguyễn Văn A")
student.doHomework("Javascript")
student.getInfo()

console.log(student);

// Thay đổi giá trị của thuộc tính
student.name = "ABC"

console.log(student);

// Xóa thuộc tính
delete student.year

console.log(student);

// Duyệt object
for (const key in student) {
    console.log(key, student[key]);
}

// Phương thức Object.keys()
console.log(Object.keys(student));

// Phương thức Object.values()
console.log(Object.values(student));

// hasOwnProperty : Kiểm tra 1 key có tồn tại không object hay không?
console.log(student.hasOwnProperty("name")); // true
console.log(student.hasOwnProperty("email")); // false

// This trỏ đến đối tượng đang thực hiện hành động trong ngữ cảnh hiện tại

// 2 người A, B đang nói chuyện với nhau
// A hỏi B
// Bạn có biết anh Nam không? Anh ấy đá bóng rất giỏi


// Bài tập Object

const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

// 1. Viết function tính thứ hạng trung bình của cả lớp
function calculateAvgClass(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].grade
    }

    return total/arr.length
}

console.log(calculateAvgClass(grades));

// 2. Viết function tính thứ hạng trung bình của nam trong lớp
// 3. Viết function tính thứ hạng trung bình của Nữ trong lớp
// 4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
// 5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
// 6. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
// 7. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
// 8. Viết function thứ hạng cao nhất của cả lớp
// 9. Viết function thứ hạng thấp nhất của cả lớp
// 10. Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
// 11. Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
// 12. Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
// 13. Viết function lấy ra học viên Nữ có tên bắt đầu bằng "J"
// 14. Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp


// 3 bài
// Bài 1: Trắc nghiệm 20 câu (10 phút)
// Bài 2: Lý thuyết (6-7 câu) (viết ra giấy - mang bút đi) (45-50 phút)
// Bài 3: 6-7 bài (thời gian còn lại -> 12h)



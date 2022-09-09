// Kiểm tra đầu giờ

/*
Câu 1: 
- Trình bày về các loại scope trong js
- Cho ví dụ về từng loại

Câu 2: 
- Function là gì? Cú pháp khai báo và gọi
- Có các loại function gì?
- Lấy ví dụ về function?

Câu 3: Phân biệt tham số (parameter) và đối số (argument)? 
Ví dụ về function và chỉ ra đâu là tham số, đâu là đối số

Câu 4:
- Trình bày về default parameter
- Cho ví dụ

Câu 5:
- Trình bày về kiểu boolean? cho ví dụ
- Tác dụng của hàm Boolean là gì? cho ví dụ?

Câu 6: 
- Thế nào là truth, falsy value
- Có bao nhiêu giá trị của falsy value? Kể tên các giá trị này

Câu 7: Nêu cú pháp của câu lệnh if - else if - else
Làm bài tập sau : Viết function nhập vào 1 số. Kiểm tra số đó có đồng thời chia hết cho 3 và 5
không.
*/

// Switch case
let money = 30000;

switch (money) {
    case 12000:
    case 20000:
    case 30000: {
        console.log("Cafe sữa");
        break;
    }
    case 10000: {
        console.log("Cafe đá");
        break;
    }
    case 8000: {
        console.log("String dâu");
        break;
    }
    case 3000: {
        console.log("Trà đá");
        break;
    }
    default: {
        console.log("Không có đồ uống nào phù hợp");
        break;
    }
}

// For
// Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày
for (let day = 1; day <= 30; day = day + 1) {
    console.log(`Ngày ${day} thức dậy lúc 5:00`);
}

// Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày vào các ngày lẻ
for (let day = 1; day <= 30; day = day + 1) {
    if (day % 2 == 1) {
        console.log(`Ngày ${day} thức dậy lúc 5:00`);
    }
}

for (let day = 1; day <= 30; day = day + 2) {
    console.log(`Ngày ${day} thức dậy lúc 5:00`);
}

// Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày. Cách 7 ngày nghỉ 1 lần
for (let day = 1; day <= 30; day = day + 1) {
    if (day % 7 == 0) {
        console.log("Nghỉ");
        continue;
    }

    console.log(`Ngày ${day} thức dậy lúc 5:00`);
}

// Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày. Đến ngày số 20, chán quá => nghỉ
for (let day = 1; day <= 30; day = day + 1) {
    if (day == 20) {
        console.log("Chán quá. Nghỉ thôi");
        break;
    }
    console.log(`Ngày ${day} thức dậy lúc 5:00`);
}

// Tiết kiệm tiền

// Trước khi bắt đầu thì số tiền trong ví = 0
let totalMoney = 0;

// Thực hiện tiết kiệm trong 10 ngày, mỗi ngày 100.000
for (let day = 1; day <= 10; day++) {
    // totalMoney = totalMoney + 100000;
    totalMoney += 100000;
}

console.log(totalMoney);

// Ví dụ 1
// Những ngày chẵn tiết kiệm 200.000, ngày lẻ 100.0000

// Ví dụ 2
// Tiết kiệm đến ngày số 8 thì hết tiền -> dừng lại

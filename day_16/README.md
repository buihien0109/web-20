## Đề bài

**Bài 1 (1 điểm)**. Viết function tìm ra số lớn thứ nhì trong mảng các số.

```javascript
// Ví dụ:
max2Numbers([2, 1, 3, 4]) => 3
max2Numbers([2, 1, 4, 3, 4]) => 3
```

**Bài 2 (1 điểm)**. Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

```javascript
// Ví dụ:
getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']) => ['aba', 'vcd'].
```


**Bài 3 (1 điểm)**. Viết function để lấy một phần tử ngẫu nhiên từ một mảng

```javascript
// Ví dụ:
getRandomElement([3, 7, 9, 11]) => 3
getRandomElement([3, 7, 9, 11]) => 9
```

**Bài 4 (1 điểm)**. Viết function để lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng

```javascript
// Ví dụ:
similarity([1, 2, 3], [1, 2, 4]) => [1,2]
similarity([1, 2, 3], [3, 4, 5]) => [3]
```

**Bài 5 (2 điểm)**. Viết function truyền vào 2 tham số:
- Tham số 1: Là 1 chuỗi thời gian (t) có dạng "giờ:phút:giây"
- Tham số 2: Là 1 số x <= 1000
Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.

```javascript
// Ví dụ: 
getTime("9:20:56", 7) => "9:21:3"
```

> Gợi ý : Hãy quy đổi ra thời gian từ hh:mm:ss ra giây => tính toán => Quy đổi ngược lại từ giây ra hh:mm:ss

**Bài 6 (2 điểm)**. Cho mảng users như sau:

```javascript
users = [
    {
        name : "Bùi Công Sơn",
        age : 30,
        isStatus : true
    },
    {
        name : "Nguyễn Thu Hằng",
        age : 27,
        isStatus : false
    },
    {
        name : "Phạm Văn Dũng",
        age : 20,
        isStatus : false
    }
]
```

- Viết function truyền vào 1 mảng các object user lấy ra những user có `age > 25` và `isStatus = true`
- Viết function truyền vào 1 mảng các object user. Hãy sắp xếp mảng users có age tăng dần

**Bài 7 (2 điểm)**. Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

```javascript

getCountElement(["một", "ngày", "nào", "đó", "một", "đó"])

// Kết quả

{
    "một" : 2,
    "ngày" : 1,
    "nào" : 1,
    "đó" : 2
}
```

## Yêu cầu

- Học viên trình bày bài giải và giải thích cách làm bằng lời.
- Nếu học viên làm được bài mà không có giải thích được sẽ bị đánh giá là chưa hiểu bài và bị trừ đi 1 nửa số điểm của bài đó.
- Sau khi hết giờ (12h) học viên commit code lên github và nộp lại link làm bài trên hệ thống của Techmaster.
- Link nộp bài sau khi hết giờ (giữ nguyên điểm), nếu nộp trong ngày (buổi chiều hoặc tối) bị trừ 3 điểm, còn sang ngày khác mới nộp bị trừ 5 điểm.

**Ví dụ**: Viết function tìm số lớn nhất trong mảng.

```javascript
/*
B1: Ban đầu gán max bằng phần tử đầu tiên trong mảng

B2: Sử dụng vòng lặp qua mảng arr. 
Nếu giá trị nào của vòng lặp > max, thì gán lại giá trị của max bằng giá trị đó. 
Cứ tiếp tục công việc đến khi kết thúc vòng lặp

B3: Ra khỏi vòng lặp trả về kết quả của max
*/
function findMaxNumber(arr) {
    let max = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
```

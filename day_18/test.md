## Kiểm tra bài cũ

### Lý thuyết

**Câu 1**
- Trình bày các phương thức dùng để truy cập trực tiếp phần tử DOM (5 phương thức)
- Ý nghĩa của các phương thức đó
- Dữ liệu trả về là gì?

**Câu 2**
- Trình bày các phương thức dùng để truy cập gián tiếp phần tử DOM
- Get/set content
- Thay đổi CSS

**Câu 3**

Trình bày về **HTML Collection** và **NodeList**

**Câu 4** 
- Trình bày về cách tạo ra phần tử DOM
- Thêm phần tử DOM (6 phương thức)
- Minh họa về thuộc tính postition trong insertAdjacent

**Câu 5** 
- Trình bày về các phương thức xóa, thay thế, copy
- Khác nhau giữa copy sử dụng deep true và false

### Bài tập

​
**Câu 1**. Tạo 1 thẻ p có **id="text"**, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

- Đặt màu văn bản thành `#777`
- Đặt kích thước phông chữ thành `2rem`
- Đặt nội dung HTML thành `Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.`

**Câu 2**. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu `blue` (tạo thẻ ul-li bằng html)

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

**Câu 3**. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):

```html
<ul id="list">
   <li>Item 1</li>
   <li>Item 2</li>
   <li>Item 3</li>
   <li>Item 4</li>
   <li>Item 5</li>
   <li>Item 6</li>
   <li>Item 7</li>
</ul>
```

Sử dụng javascript để thực hiện những công việc sau

1. Thêm 3 thẻ `<li>` có nội dung **Item 8**, **Item 9**, **Item 10** vào cuối danh sách

2. Sửa nội dung cho thẻ `<li> 1` thành màu đỏ (color)

3. Sửa background cho thẻ `<li> 3` thành màu xanh (background-color)

4. Remove thẻ `<li> 4`

5. Thêm thẻ `<li>` mới thay thế cho thẻ `<li> 4` bị xóa ở bước trước, thẻ `<li>` mới có nội dung bất kỳ
const btn = document.querySelector(".promotion button")

// Mockup danh sách sản phẩm
let products = [

]

let promotionCode = {
    A : 0.4,
    B : 0.3,
    C : 0.2,
    D : 0.1,
}

// Render danh sách sản phẩm ra ngoài giao diện
function renderProduct(arr) {
    // Clear nội dung

    // Kiểm tra mảng rỗng

    // Sử dụng for -> Render
}

// Xóa sản phẩm
function deleteProduct(id) {
    // Duyệt mảng products để tìm sản phẩm cần xóa

    // Nếu tìm được thì sử dụng splice để xóa

    // Render lại giao diện sau khi xóa
}

// Cập nhật số lượng sản phẩm
function updateTotalProduct(arr) {
    // Cộng dồn giá trị của thuộc tính "count" trong mỗi sản phẩm

    // Cập nhật lên trên giao diện
}

// Thay đổi số lượng sản phẩm
function changeTotalProduct(id, event) {
    // Lấy giá trị trong ô input dựa vào biến event trong hàm xử lý sự kiện

    // Duyệt mảng products để tìm sản phẩm cần thay đổi

    // Render lại giao diện sau khi xóa
}

function updateTotalMoney(arr) {
    // Tính tổng tiền subtotal
    // subtotal = Số lượng * đơn giá

    // Tính thuế giá trị gia tăng
    // VAT = 10% của subtotal

    // Kiểm tra xem mã giảm giá có chính xác hay không
    // Nếu có => discount = subtotal * (% mã giảm giá)
    // Nếu không => discount = 0
    // Ẩn hiện class "hide" nếu discount chính xác hoặc không

    // Tính tổng tiền phải trả
    // total = subtotal + VAT - discount

    // Cập nhật lên trên giao diện
}

btn.addEventListener('click', updateTotalMoney(products))


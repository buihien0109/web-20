// Promise : Lời hứa

// HỨA : Nếu có trên 30 triệu, sẽ mua iphone 13 pro max
let money = 35

// Hứa
let buyIphone = new Promise(function (resolve, reject) {
    if (money > 30) {
        resolve("Mua iphone thôi") // Lời hứa được thực hiện thành công
    } else {
        reject("Kiếm thêm tiền đi") // Lời hứa được thực hiện thất bại
    }
})

// Hứa tiếp
// Nếu mua iphone xong, còn thừa tiền, nếu đủ thì mua con airpod (4 củ)

let buyAirpod = new Promise(function(resolve, reject) {
    if(money - 30 - 4 >= 0) {
        resolve("Mua thêm airpod")
    } else {
        reject("Không đủ tiền mua airpod")
    }
})

// Thực hiện lời hứa
buyIphone
    .then(res => { // res là nội dung trong resolve
        console.log(res);
        return buyAirpod;
    })
    .then(res1 => {
        console.log(res1);
    })
    .catch(error => { // error là nội dung trong reject
        console.log(error)
    })
    .finally(() => { // Luôn được thực hiện kể cả thành công hay thất bại
        console.log("Đi về nhà");
    })

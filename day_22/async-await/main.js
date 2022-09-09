// Promise : Lời hứa

// HỨA : Nếu có trên 30 triệu, sẽ mua iphone 13 pro max
let money = 32

// Hứa
let buyIphone = function () {
    return new Promise(function (resolve, reject) {
        if (money > 30) {
            resolve("Mua iphone thôi") // Lời hứa được thực hiện thành công
        } else {
            reject("Kiếm thêm tiền đi") // Lời hứa được thực hiện thất bại
        }
    })
}

// Hứa tiếp
// Nếu mua iphone xong, còn thừa tiền, nếu đủ thì mua con airpod (4 củ)

let buyAirpod = function () {
    return new Promise(function (resolve, reject) {
        if (money - 30 - 4 >= 0) {
            resolve("Mua thêm airpod")
        } else {
            reject("Không đủ tiền mua airpod")
        }
    })
}


async function buy() {
    try {
        let res = await buyIphone()
        console.log(res);

        let res1 = await buyAirpod()
        console.log(res1);

    } catch (error) {
        console.log(error);
    }

    return "Về nhà thôi" // luôn trả về promise
}

buy().then(res => console.log(res))
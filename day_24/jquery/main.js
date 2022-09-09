
// Jquery
$(document).ready(function () {
    console.log($('#heading').text());

    $('#heading').text("Hôm nay thế nào")

    $('#heading').html("<span>Thẻ heading</span>")

    // $('#heading').css("background-color", "red")
    // $('#heading').css("color", "black")

    $('#heading').css({
        "background-color" : "red",
        "color" : "black",
        "font-size" : "100px"
    })

    $('p').each(function(index, ele) {
        $(ele).css("color", "blue")
    })
});



// Javascript
// window.onload = function() {
//     const btn = document.querySelector("#btn");
//     const para = document.querySelector(".para");

//     btn.addEventListener('click', function() {
//         para.style.display = "none";
//     })
// }
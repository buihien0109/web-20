const btn = document.querySelector('#btn-change-color');
const r = document.querySelector(':root');

// Thay đổi theme
let isChange = false;

const defaultColor = {
    "--color-text": "#646464",
    "--color-title": "#333333",
    "--color-background": "#eee"
}

const otherColor = {
    "--color-text": "red",
    "--color-title": "green",
    "--color-background": "blue"
}

btn.addEventListener('click', function () {
    isChange ? changeColor(defaultColor) : changeColor(otherColor)
    isChange = !isChange
});

function changeColor(colors) {
    for (const key in colors) {
        r.style.setProperty(key, colors[key]);
    }
}

// Gửi email
const titleEl = document.getElementById("title-email");
const receiverEl = document.getElementById("receiver-email");
const contentEl = document.getElementById("content-email");
const btnSendMail = document.getElementById("btn-send-email");

btnSendMail.addEventListener("click", function () {
    let title = titleEl.value;
    let receiver = receiverEl.value;
    let content = contentEl.value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "buihien01091997@gmail.com",
        Password: "9A0212CA511CEDEB91962E1AD04844ECB01A",
        To: receiver,
        From: "buihien01091997@gmail.com",
        Subject: title,
        Body: content
    })
        .then((message) => {
            titleEl.value = "";
            receiverEl.value = "";
            contentEl.value = "";
            alert(message);
        })
        .catch((err) => {
            console.log(err);
        });
})
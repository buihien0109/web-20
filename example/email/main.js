const btn = document.querySelector("#btn");
const emailEl = document.querySelector("#email");
const titleEl = document.querySelector("#title");
const contentEl = document.querySelector("#content");

btn.addEventListener("click", function () {
    const email = emailEl.value;
    const title = titleEl.value;
    const content = contentEl.value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "thuhangvnua@gmail.com",
        Password: "1932C24C0BFE371FFB613E65D8C54CEFDB45",
        To: email,
        From: "thuhangvnua@gmail.com",
        Subject: title,
        Body: content,
    })
        .then((message) => {
            emailEl.value = "";
            titleEl.value = "";
            contentEl.value = "";
            alert(message);
        })
        .catch((err) => {
            console.log(err);
        });
});

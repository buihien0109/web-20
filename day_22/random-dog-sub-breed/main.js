const btnGetSubBreed = document.getElementById("btn-get-sub-breed");
const image = document.getElementById("image");
const select = document.getElementById("breed-list");
const subBreedContainerEl = document.querySelector(".sub-breed");
const subBreedEl = document.querySelector(".sub-breed ul");
const resultEl = document.querySelector(".result");

// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all

async function getBreedList() {
    // Gọi API để lấy danh sách giống loài
    let res = await axios.get("https://dog.ceo/api/breeds/list/all");

    // Sau khi có data thì hiển thị kết quả trên giao diện
    renderBreed(res.data.message);
}

function renderBreed(breeds) {
    // Duyệt qua object breeds -> tạo thẻ option -> gắn vào DOM

    // Cách 1: Sử dụng for ... in
    // Cách 2 : Lấy ra danh sách keys của objec (Object.keys) => Duyệt mảng
    for (const breedName in breeds) {
        select.insertAdjacentHTML(
            "beforeend",
            `<option value=${breedName}>${breedName}</option>`
        );
    }
}

btnGetSubBreed.addEventListener("click", function () {
    let breedName = select.value;
    getSubBreedList(breedName);
});

async function getSubBreedList(breedName) {
    let res = await axios.get(`https://dog.ceo/api/breed/${breedName}/list`);

    displaySubBreedList(breedName, res.data.message);
}

function displaySubBreedList(breedName, subBreeds) {
    subBreedContainerEl.classList.remove("hide");
    subBreedEl.innerHTML = "";

    if (subBreeds.length == 0) {
        subBreedEl.innerHTML = "<li>Không có sub breed</li>";
        return;
    }

    for (let i = 0; i < subBreeds.length; i++) {
        subBreedEl.innerHTML += `
            <li>
                <a javascript:void(0) href="#" onclick="getRandomImage('${breedName}', '${subBreeds[i]}')">${subBreeds[i]}</a>
            </li>
        `;
    }
}

async function getRandomImage(breedName, subBreedName) {
    let res = await axios.get(
        `https://dog.ceo/api/breed/${breedName}/${subBreedName}/images/random`
    );
    resultEl.classList.remove("hide");
    image.src = res.data.message;
}

getBreedList();

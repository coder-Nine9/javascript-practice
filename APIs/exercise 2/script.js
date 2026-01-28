let charSelect = document.getElementById("charSelect");
let characterCard = document.getElementById("characterCard");
let charImage = document.getElementById("charImage");
let fullName = document.getElementById("fullName");
let title = document.getElementById("title");
let family = document.getElementById("family");
let loading = document.getElementById("loading");
let api = "https://thronesapi.com/api/v2/Characters"
let data;
async function get() {
    loading.style.display = "block";
    const response = await fetch(api);
    data = await response.json();
    loading.style.display = "none";
    printData(data)
}


function printData(data) {
    let fragment = document.createDocumentFragment()
    data.forEach(character => {
        let option = document.createElement("option");
        option.textContent = character.fullName;
        fragment.appendChild(option);
    })
    charSelect.appendChild(fragment);
}

charSelect.addEventListener("change", (e) => {
    let option = e.target.value;
    characterCard.style.display = "none";

    const character = data.find(char => char.fullName === option);

    if (character) {
        charImage.src = character.imageUrl;
        fullName.textContent = character.fullName;
        title.textContent = character.title;
        family.textContent = character.family;
        characterCard.style.display = "block";
    }
})

get()

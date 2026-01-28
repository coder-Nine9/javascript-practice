let noteI = document.querySelector("#note1");
let noteII = document.querySelector("#note2");
let noteIII = document.querySelector("#note3");
let btn = document.querySelector("#calcBtn");

function calcMy() {
    let note1 = parseFloat(noteI.value);
    let note2 = parseFloat(noteII.value);
    let note3 = parseFloat(noteIII.value);

    return (note1 + note2 + note3) / 3;
}

btn.addEventListener("click", () => {
    let moyenne = calcMy();
    let moyenneDisplay = document.querySelector("#moyenneDisplay");
    let mention = document.querySelector("#mentionDisplay");

    if (isNaN(moyenne)) {
        moyenneDisplay.textContent = "Err";
        mention.textContent = "Entrez 3 notes";
        return;
    }

    moyenneDisplay.textContent = moyenne.toFixed(2);

    if (moyenne >= 16) {
        mention.textContent = "Très bien";
    } else if (moyenne >= 14) {
        mention.textContent = "Bien";
    } else if (moyenne >= 12) {
        mention.textContent = "Assez bien";
    } else if (moyenne >= 10) {
        mention.textContent = "Passable";
    } else {
        mention.textContent = "Insuffisant";
    }
});

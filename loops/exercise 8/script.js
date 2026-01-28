let tests = document.querySelector("#attemptsDisplay strong");
let input = document.querySelector("#guessInput");
let btn = document.querySelector("#guessBtn");
let feedback = document.querySelector("#feedback");
let resetBtn = document.querySelector("#resetBtn");
let secretNbr = getSecretNbr();
let i = 5;

function getGuessNbr() {
    feedback.textContent = "";
    let nbrGuess = parseInt(input.value);
    if (isNaN(nbrGuess) || ((nbrGuess <= 0) || (nbrGuess > 30))) {
        feedback.textContent = "Error! Enter a number between 1 and 30";
        return null
    }
    return nbrGuess;
}

function getSecretNbr() {
    return Math.floor(Math.random() * 30) + 1
}

function result(nbrGuess) {
    i--;
    tests.textContent = i;
    if (secretNbr < nbrGuess) {
        feedback.textContent = "Too high!";
    } else if (secretNbr > nbrGuess) {
        feedback.textContent = "Too low!";
    } else if (secretNbr === nbrGuess) {
        feedback.textContent = "win!";
        feedback.classList.add("correct");
        resetBtn.style.display = "block";
        btn.disabled = true;
        input.disabled = true;
        return
    }
    if (i === 0) {
        feedback.textContent = "game over";
        feedback.classList.add("incorrect");
        resetBtn.style.display = "block";
        btn.disabled = true;
        input.disabled = true;
        return
    }
}


btn.addEventListener("click", () => {
    let nbrGuess = getGuessNbr();
    if (nbrGuess === null) return;
    console.log(secretNbr);
    result(nbrGuess);
})


resetBtn.addEventListener("click", () => {
    feedback.textContent = "Good luck!";
    feedback.classList.remove("correct");
    feedback.classList.remove("incorrect");
    resetBtn.style.display = "none";
    btn.disabled = false;
    input.disabled = false;
    input.value = "";
    i = 5;
    tests.textContent = i;
    secretNbr = getSecretNbr();
})
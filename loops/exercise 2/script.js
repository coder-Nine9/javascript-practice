let input = document.getElementById("startNumber");
let result = document.getElementById("result");



function getStartNumber() {
    let startNumber = parseInt(input.value);
    if (isNaN(startNumber)) {
        result.textContent = "Error! Enter a number";
        return null;
    }
    return startNumber;
}

function showWithWhile() {
    let start = getStartNumber();
    if (start === null) return;
    let i = start + 1;
    let output = "";
    while (i <= start + 10) {
        output += i + " ";
        i++;
    }
    result.textContent = output;
}

function showWithDoWhile() {
    let start = getStartNumber();
    if (start === null) return;
    let i = start + 1;
    let output = "";
    do {
        output += i + " ";
        i++;
    } while (i <= start + 10);
    result.textContent = output;
}










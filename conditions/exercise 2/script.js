let A = document.querySelector("#numberA");
let B = document.querySelector("#numberB");
let numA ;
let numB ;
let numC ;
function checkTheyCases() {
     numA = parseFloat(A.value);
     numB = parseFloat(B.value);
     let condition = numA * numB >= 0;
    if (condition) {
        numC = numA;
        numA = numB;
        numB = numC;
    } else {
        numC = numA ;
        numA += numB;
        numB *= numC;
    }
}
document.querySelector("#manipulateButton").addEventListener("click", () => {
    checkTheyCases();
    document.querySelector("#resultA").innerHTML = numA;
    document.querySelector("#resultB").innerHTML = numB;
})
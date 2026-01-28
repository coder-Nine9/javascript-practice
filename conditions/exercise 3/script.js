let input = document.querySelector("#copiesInput");
let output = document.querySelector("#totalBill");
let button = document.querySelector("#calculateButton");


function calculFacuteur(num) {
    const A = 0.30; const B = 0.25; const C = 0.20;
    let Invoice = 0;
    if (num <= 10) {
        Invoice = num * A;
    } else if (num <= 30) {
        Invoice = 10 * A + (num - 10) * B;
    } else if (num > 30) {
        Invoice = 10 * A + 20 * B + (num - 30) * C;
    }
    return Invoice;
}

button.addEventListener("click", () => {
    let numInput = parseInt(input.value);
    if(numInput < 0){
        output.innerHTML = "error!"
    }else{
       output.innerHTML = calculFacuteur(numInput);
    }
})
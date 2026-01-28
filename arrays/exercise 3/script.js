let btn = document.getElementById("calcBtn");
let vectorU;
let vectorV;

function validation() {
    let p=0;
    vectorU = Array.from(document.querySelectorAll(".u-val"))
        .map((el) => {
            let value = parseInt(el.value);
            if (isNaN(value)) {
                alert("Error! Enter a number");
                p=1;
                return 0;
            }
            return value;
        })
    vectorV = Array.from(document.querySelectorAll(".v-val"))
        .map((el) => {
            let value = parseInt(el.value);
            if (isNaN(value)) {
                alert("Error! Enter a number");
                p=1;
                return 0;
            }
            return value;
        })
        if(p===1)  return true;
}

function productScalar() {
    let p = 0;
    for (let i = 0; i < vectorU.length; i++) {
        p += vectorU[i] * vectorV[i];
    }
    return p;
}
btn.addEventListener("click", () => {
    let isNull=validation();
    if(isNull === true) return;
    document.getElementById("finalResult").textContent = productScalar();
    document.querySelector(".hidden").style.display = "block";
})



let input = document.getElementById("numInput");
let btn = document.getElementById("addBtn");
let progress = document.getElementById("progressFill");
let sumResult = document.getElementById("sumResult");
let prodResult = document.getElementById("prodResult");
let avgResult = document.getElementById("avgResult");
let resetBtn = document.getElementById("resetBtn");
let counter = document.getElementById("counter");
let resultTable = document.querySelector(".results");
let head2 = document.querySelector(".container h2");
let end = Stander("enter the number of elements");
let Array = [];
let i = 0;


function Stander(message){
    let end ;
    do{
        end = prompt(message);
    }while(end===null || end.trim() === "" || isNaN(parseInt(end)));
    return  parseInt(end);
}




function display() {
    let p = head2.nextElementSibling;
    p.textContent = `Enter ${end} numbers to calculate statistics.`
    counter.textContent = `Numbers added: ${i}/${end}`;
}
display()

function getNumber() {
    let number = parseFloat(input.value);
    if (isNaN(number)) {
        alert("Error! Enter a number");
        return null
    }
    return number;
}
function sum() {
    let sum = 0;
    Array.forEach(nbr => {
        sum += nbr;
    });
    return sum;
}

function Product() {
    let product = 1;
    for (let i = 0; i <= Array.length - 1; i++) {
        product *= Array[i];
    }
    return product;
}

function Average() {
    let Total = sum();
    return Total / Array.length;
}


btn.addEventListener("click", () => {
    let number = getNumber();
    if (number === null) return;
    console.log(i);
    if (i < end) {
        Array.push(number);
        counter.textContent = `Numbers added: ${i + 1}/${end}`;
        progress.style.width = `${((i + 1) / end) * 100}%`;
        input.value = "";
    }
    i++;
    if (i === end) {
        console.log(Array);
        input.disabled = true;
        btn.disabled = true;
        resultTable.classList.remove("hidden");
        sumResult.textContent = `${sum()}`;
        prodResult.textContent = `${Product()}`;
        avgResult.textContent = `${Average()}`;
    }
})

resetBtn.addEventListener("click", () => {
        i=0;
        Array=[];
        input.disabled = false;
        btn.disabled = false;
        resultTable.classList.add("hidden");
        progress.style.width = `0%`
        end = Stander("enter the number of elements");
        display();
})

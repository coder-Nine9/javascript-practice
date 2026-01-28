let bigTitle = document.querySelector(".container h2");
let counter = document.querySelector("#countLabel");
let btn = document.getElementById("addBtn");
let input = document.getElementById("intInput");
let result = document.querySelector("#resultBox");
let minValue= document.getElementById("minValue");
let resetBtn = document.getElementById("resetBtn");
let Numbers = [];
let end = requiredprompt("Enter the number of elements:");
let i = 0

function requiredprompt(message){
    let end;
    do{
      end = prompt(message);
    }while(isNaN(parseInt(end))|| parseInt(end)<=0 || parseInt(end) === null);
    return parseInt(end);
}

function display(){
     let title = bigTitle.nextElementSibling;
     title.textContent = `Enter ${end} integers to find the smallest value in the set.`;
     counter.textContent = `Numbers added: ${i}/${end}`;
}
display();

function getNumber(){
    let number = parseFloat(input.value);
    if(isNaN(number)){
        alert("Error! Enter a number");
        return null
    }
    return number;
}

function findMinValue(){
   let min= Numbers[0];
   for(let j = 1 ; j < Numbers.length ; j++){
     if(Numbers[j]<min){
        min=Numbers[j];
     }
   }
   return min
}

btn.addEventListener("click",()=>{
    if(i<end){
       let number = getNumber();
       if(number === null) return;
       Numbers.push(number);
       counter.textContent = `Numbers added: ${i+1}/${end}`;
       input.value = "";
       i++;
    }
    if(i===end){
        input.disabled= true;
        btn.disabled = true;
        minValue.textContent = findMinValue();
        result.style.display = "block";
    }
})

resetBtn.addEventListener("click",()=>{
    Numbers=[];
    i=0;
    end=requiredprompt("Enter the number of elements:");
    display();
    input.disabled= false;
    btn.disabled = false;  
    result.style.display = "none";
})

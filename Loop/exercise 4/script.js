let input = document.getElementById("exponentN");
const btn = document.getElementById("calcBtn");
let result = document.getElementById("displayArea");

function getNumber(){
    result.textContent ="";
    let number = parseInt(input.value);
    if(isNaN(number)|| number < 0 ){
        result.textContent = "Error! Enter a positive number"
        return null
    }
    return number;
}

btn.addEventListener("click", ()=>{
   let exponentN = getNumber();
   if(exponentN === null) return;
   let S = 0;
   for(let i = 0 ; i<=exponentN; i++){
       S+= 10**i;
   }
   result.textContent = S;
})
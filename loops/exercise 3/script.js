let input = document.getElementById("numberN");
let btn = document.getElementById("calculateBtn");
let result = document.getElementById("resultDisplay");
function getNumber(){
    result.textContent = "";
    let number = parseInt(input.value);
    if(isNaN(number) || number <= 0){
           result.textContent = "Error! Enter a  positive  number" ;
           return null;
    }
    return number;
}
btn.addEventListener("click", ()=>{
    let number = getNumber();
    if(number === null) return ;
    let S = 0;
    for(let i = 1 ; i <= number ; i++){
      S += 1/i
    }
    result.textContent = S.toFixed(2);
})
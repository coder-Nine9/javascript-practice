let input = document.getElementById("numberInput");
let btn = document.getElementById("findBtn");
let result = document.getElementById("divisorList");


function getNumber(){
    result.textContent = "";
    let number = parseInt(input.value);
    if(isNaN(number) || number <= 0){
        result.textContent = "Error! Enter a positive number";
        return null;
    }
    return number;
}

btn.addEventListener("click", ()=>{
    let number = getNumber();
    if(number === null) return ;
    let fragment = document.createDocumentFragment()
    for(let i = 1; i <= number; i++){
        if(number%i === 0){
           let span = document.createElement("span")
           span.classList.add("divisor-tag");
           span.textContent = i;
           fragment.appendChild(span);
        }
    }
    result.appendChild(fragment);
    
})
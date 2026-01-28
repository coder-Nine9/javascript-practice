let input = document.getElementById("ageN");
let btn = document.getElementById("calcSavingsBtn");
let result= document.getElementById("totalAmount");

function getNumber(){
    result.textContent = "";
    let ageN  = parseInt(input.value);
    if(isNaN(ageN) || ageN<=0){
        result.textContent = "Error! Enter a positive number";
        return null
    }
    return ageN;
}




btn.addEventListener("click",()=>{
    let ageN = getNumber();
    if(ageN === null) return;
    console.log(ageN);
    let S=0;
    for(let i =1 ; i <= ageN; i++){
        S+= 500+(i*3);
    }
    result.textContent = `${S} dh`;

})
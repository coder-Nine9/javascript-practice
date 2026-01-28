let age = document.querySelector("#ageInput");
let result = document.querySelector("#categoryResult");
const button = document.querySelector("#findCategoryBtn");


function determineCategory(age){
    if(age < 6) return  "baby";
    if(age>= 6 && age <=7) return  "poussin";
    if(age>= 8 && age <=9) return  "Pupille";
    if(age>= 10 && age <=11) return  "Minime";
    return "Cadet";
}

button.addEventListener("click", ()=>{
    let ageInt = parseInt(age.value);
    result.innerHTML = (ageInt>=0)? determineCategory(ageInt): "error";
})
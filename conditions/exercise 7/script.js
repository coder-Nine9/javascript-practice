
function isTaxable(age,sexe){
     const isMaleTaxable = (age >20 && sexe === 'H');
     const isFemaleTaxable = (age >18 && age <35 && sexe === 'F');
    
    return isMaleTaxable || isFemaleTaxable
}

document.getElementById("checkTaxBtn").addEventListener("click",()=>{
   let ageInput = document.getElementById("ageInput");
   let result = document.getElementById("taxStatus");
   result.classList.remove("taxable", "not-taxable");
   let age = parseInt(ageInput.value);
   if(isNaN(age)){
     result.textContent = "Err! enter your age";
     return 
   } 
   let sexe = document.getElementById("sexeSelect");
   if(isTaxable(age,sexe.value)){
       result.textContent = "pay the taxes";
       result.classList.add("taxable")
   }else{
       result.textContent = "not pay the taxes";
       result.classList.add("not-taxable")
   }
})
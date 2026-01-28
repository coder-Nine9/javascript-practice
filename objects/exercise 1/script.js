let nameInput = document.getElementById("nameInp");
let ageInput = document.getElementById("ageInp");
let jobInput = document.getElementById("jobInp");
let inputs = document.querySelectorAll("input");
let btn = document.getElementById("createBtn");
let result = document.getElementById("profileCard");
let user;
function  validation(){
    for(const input of inputs){
        if(input.value.trim() === ""){
            alert("Error! Full the input");
            return false
        }
    }
    return true;
}


btn.addEventListener("click",()=>{
   let valid = validation();
   if(!valid) return;
   user={
    name:`${nameInput.value}`,
    age:`${ageInput.value}`,
    job:`${jobInput.value}`
   };
   document.getElementById("displayName").textContent = user.name;
   document.getElementById("displayAge").textContent = user.age;
   document.getElementById("displayJob").textContent = user.job;
   document.getElementById("objectOutput").textContent = JSON.stringify(user, null, 2);
   result.style.display ="block";
})



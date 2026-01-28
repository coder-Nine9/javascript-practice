let A = document.querySelector("#numberA");
let B = document.querySelector("#numberB");
let button = document.querySelector("#checkButton");
let check = document.querySelector("#result");

button.addEventListener("click", ()=>{
    if(((A.value > 0) && (B.value > 0 )) || ((A.value < 0) && (B.value < 0 )) || ((A.value == 0)  &&  (B.value == 0) )){
        check.innerHTML = "they have the same signe";
    }else{
        check.innerHTML = "they don't have the same signe";
    }
})


//parseFloat(input.value)




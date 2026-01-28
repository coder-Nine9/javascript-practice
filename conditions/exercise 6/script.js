let CA = document.getElementById("coeffA");
let CB = document.getElementById("coeffB");
let CC = document.getElementById("coeffC");
let btn = document.getElementById("solveBtn");
let deltaDisplay = document.getElementById("deltaDisplay");
let solutions = document.getElementById("solutionDisplay");


function calcDelta(a,b,c){
    let delta = ((b)**2) - (4 * a * c);
    calcSolution(delta,a,b,c);
}

function calcSolution(delta,a,b,c){
    deltaDisplay.textContent = delta;
    if(a!=0){
        if(delta > 0){
            let x1 = (-b - Math.sqrt(delta))/(2*a);
            let x2 = (-b + Math.sqrt(delta))/(2*a);
            solutions.textContent = `S = {${x1},${x2}}`;
        }else if (delta === 0){
            let x = -b/(2*a);
            solutions.textContent = `S = {${x}}`
        }else if(delta < 0){
            let x = -b/(2*a);
            let y = Math.sqrt(-delta)/(2*a);
            solutions.textContent = `S = {${x}-${y}i ,${x}+${y}i}`
        }
    }else if(b!=0){
         if(c!=0){
            let x = -c/b;
            solutions.textContent = `S = {${x}}`
         }else{
            let x = 0 ;
            solutions.textContent = `S = {${x}}`
         }
    }else{
        if(c!=0){
            
            solutions.textContent = `equation n'admet pas un solution`;
         }else{
            solutions.textContent = `equation admet infinite de solution`;
         }
    }
}

btn.addEventListener("click" , ()=>{
    let CoeffA = parseFloat(CA.value);
    let CoeffB = parseFloat(CB.value);
    let CoeffC = parseFloat(CC.value);
    calcDelta(CoeffA,CoeffB,CoeffC);
    
})
let input = document.getElementById("startNum");
let result = document.getElementById("numbersList");


function NextNbrs(A){
    result.textContent = "";
    for(let i = A+1 ; i <= A + 10; i++){
        let li = document.createElement('li');
        li.textContent = i + " ";
        result.appendChild(li);
    }
}



function showNumbers(){
    let startNbr = parseInt(input.value);
    if(isNaN(startNbr)){
          result.textContent = "Err! Enter an value";
          return
    }
    NextNbrs(startNbr);
}
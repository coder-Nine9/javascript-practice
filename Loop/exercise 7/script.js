const btn = document.getElementById("generateBtn");
const tableGrid = document.getElementById("tableGrid");

btn.addEventListener("click",()=>{
    tableGrid.innerHTML = "";
    let fragment = document.createDocumentFragment();
    for(let i = 1 ; i<=10;i++){
        for(let j = 1 ; j<=10;j++){
           let span = document.createElement("span");
           span.classList.add("cell");
           span.textContent= `${i} x ${j} = ${i*j}` ;
           fragment.appendChild(span);
    }
    }
    tableGrid.appendChild(fragment);
})
let priceHT = document.getElementById("priceHT");
let categorySelect = document.getElementById("categorySelect");
let tvaAmount = document.getElementById("tvaAmount");
let totalTTC = document.getElementById("totalTTC");

document.getElementById("calculateTTC").addEventListener("click",()=>{
    let HT = parseFloat(priceHT.value);
    priceHT.classList.remove("error");
    if(isNaN(HT)){
        priceHT.classList.add("error");
        return
    }
    calcTTC(HT ,categorySelect.value )
})

function calcTTC(HT,category){
    let TVA;
    switch(category){
        case 'A': TVA = HT * 0.07;
        break
        case 'B': TVA = HT * 0.2;
        break
        case 'C': TVA = HT * 0.25;
        break
    }
    tvaAmount.textContent = TVA.toFixed(2) ;
    totalTTC.textContent = (HT + TVA).toFixed(2);
}
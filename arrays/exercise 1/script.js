let  result = document.getElementById("vowelDisplay");
let array = ["a","e","i","o","u","y"];
document.getElementById("showVowelsBtn").addEventListener("click",()=>{
   result.textContent = "";
   let fragment = document.createDocumentFragment();
   array.forEach(vowel => {
      let div = document.createElement("div");
      div.textContent = vowel;
      div.classList.add("vowel-card");
      fragment.appendChild(div);
   });
   result.appendChild(fragment);
})
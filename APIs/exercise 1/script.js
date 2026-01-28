let loader = document.getElementById("loader");
let quoteContent = document.getElementById("quoteContent");
let text = document.getElementById("text");
let btn = document.getElementById("newQuoteBtn");
let author = document.getElementById("author");


btn.addEventListener("click",()=>{
    loader.style.display="block";
    quoteContent.style.display = "none"
    get()
    loader.style.display="none";
    quoteContent.style.display = "block"
})

async function get(){
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    text.textContent=data.quote;
    author.textContent=data.author;
    console.log(data.quote)
    console.log(data.author)
}

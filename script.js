// Array  of objects. each object is a Quote. The keys/ properties are, who said it and quote
const cardText = document.querySelector(".card-text")
const cardTitle = document.querySelector(".card-title")
const btn = document.querySelector(".btn");


const lincoln = {
    whoSaidIt: "ABRAHAM LINCOLN",
    theQuote: "I do the very best I know how - the very best I can; and I mean to keep on doing so until the end."
}
const jobs = {
    whoSaidIt: "STEVE JOBS", 
    theQuote: "The most important thing is to enjoy your life - to be happy - it's all that matters."
}
const oprah = {
    whoSaidIt: "OPRAH WINFREY", 
    theQuote: "The best way to find out what you want in life is to try a lot of things."
}

let quotes = [lincoln, jobs, oprah];

// getRandom Quote - random number up to quotes.length
// return index of that 
function getRandomQuote() {
    let index = Math.floor(Math.random()*quotes.length)
    cardText.textContent = quotes[index].theQuote
    cardTitle.textContent = quotes[index].whoSaidIt
}




btn.addEventListener("click", getRandomQuote)
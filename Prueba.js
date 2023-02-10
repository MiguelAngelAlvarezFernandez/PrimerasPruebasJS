let ElBody
ElBody = document.querySelector("body")
let MiPrimerParrafo = document.createElement("p")
MiPrimerParrafo.innerText = "Lo que hay que hacer para poner una frase"
ElBody.appendChild(MiPrimerParrafo)

let MiprimerHeading
MiprimerHeading = document.createElement("h2")
MiprimerHeading.innerText = "A ver si sale mi primer heading"
ElBody.appendChild(MiprimerHeading)

console.log(MiprimerHeading)

MiPrimerParrafo.innerText = "Y ahora a ver que sale"

console.log(MiPrimerParrafo)

function sayHiTo(name) {
const hello = "Hi " + name
}

const pedroWelcome = sayHiTo("Pedro") // pedroWelcome === "Hi Pedro" 
const anaWelcome = sayHiTo("Ana") // anaWelcome === "Hi Ana"
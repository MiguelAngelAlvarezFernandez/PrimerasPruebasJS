let ElBody
ElBody = document.querySelector("body")
let MiPrimerParrafo
MiPrimerParrafo = document.createElement("p")
MiPrimerParrafo.innerText = "Lo que hay que hacer para poner una frase"
ElBody.appendChild(MiPrimerParrafo)

let MiprimerHeading
MiprimerHeading = document.createElement("h2")
MiprimerHeading.innerText = "A ver si sale mi primer heading"
ElBody.appendChild(MiprimerHeading)

console.log(MiprimerHeading)
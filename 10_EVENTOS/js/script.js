// 1 - Adicionando eventos
const btn = document.querySelector("#my-button")

btn.addEventListener("click", function(){

console.log("clicou aqui")

})

// 2 - Removendo eventos
const secondBtn = document.querySelector("#btn")

function imprimirMensagem(){
    console.log("aqui tem evento")
}

secondBtn.addEventListener("click", imprimirMensagem)

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {

    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)

})

// 3 - Argumento do evento
const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.offSetX)
    console.log(event.pointerType)
    console.log(event.target)
})

// 4 - Propagação 
const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
    console.log("Evento 1")
})

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Evento 2")
})

// 5 - Removendo evento padrao 
const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("nao alterou a pagina")
})
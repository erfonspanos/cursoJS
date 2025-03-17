// 1 - Metodos 
const animal = {
    nome: "Bob",
    latir: function(){
        console.log('Au Au')
    }
}

console.log(animal.nome)

animal.latir()

// 2 - aprofundando em metodos
const pessoa = {
    nome: "Erfon",

    getNome: function(){
        return this.nome;
    },

    setNome: function(novoNome){
        this.nome = novoNome;
    }
}

console.log(pessoa.nome)
console.log(pessoa.getNome())

pessoa.setNome("Jhonny")

console.log(pessoa.getNome())

// 3 - Prototype
const text = "asd"

console.log(Object.getPrototypeOf(text))

const bool = true

console.log(Object.getPrototypeOf(bool))

const numb = 15

console.log(Object.getPrototypeOf(numb))

const arr = []

console.log(Object.getPrototypeOf(arr))


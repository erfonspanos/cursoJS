// // 1 - Metodos 
// const animal = {
//     nome: "Bob",
//     latir: function(){
//         console.log('Au Au')
//     }
// }

// console.log(animal.nome)

// animal.latir()

// // 2 - aprofundando em metodos
// const pessoa = {
//     nome: "Erfon",

//     getNome: function(){
//         return this.nome;
//     },

//     setNome: function(novoNome){
//         this.nome = novoNome;
//     }
// }

// console.log(pessoa.nome)
// console.log(pessoa.getNome())

// pessoa.setNome("Jhonny")

// console.log(pessoa.getNome())

// // 3 - Prototype
// const text = "asd"

// console.log(Object.getPrototypeOf(text))

// const bool = true

// console.log(Object.getPrototypeOf(bool))

// const numb = 15

// console.log(Object.getPrototypeOf(numb))

// const arr = []

// console.log(Object.getPrototypeOf(arr))

// console.log(Object.getPrototypeOf(arr) === Array.prototype)


// // 4 - mais sobre o prototype
// const myObject = {
//     a: "b"
// }

// console.log(Object.getPrototypeOf(myObject))
// console.log(Object.getPrototypeOf(myObject) === Object.prototype)

// const mySecondObject = Object.create(myObject)

// console.log(mySecondObject)
// console.log(mySecondObject.a)

// console.log(Object.getPrototypeOf(mySecondObject) === myObject)

// // 5 - Classes basicas

// const cachorro = {
//     raca: null,
//     patas: 4
// }

// const pastorAlemao = Object.create(cachorro)

// pastorAlemao.raca = "Pastor Alemão"

// console.log(pastorAlemao)

// const borderCollie = Object.create(cachorro)

// borderCollie.raca = "Border Collie"

// console.log(borderCollie)

// // 6 - Funcao como classe - Funcao Construtora
// function criarCachorro(nome, raca){
//     const cachorro = Object.create({})

//     cachorro.nome = nome;
//     cachorro.raca = raca;

//     return cachorro
// }

// const kuro = criarCachorro("Kuro", "Border Collie")

// console.log(kuro)

// const tigor = criarCachorro("Tigor", "Shih Tzu")

// console.log(tigor)

// // 7 - Funcoes como classe
// function Cachorro(nome, raca){
//     this.nome = nome;
//     this.raca = raca;
// }

// const husky = new Cachorro("Sony","Husky Siberiano")
// console.log(husky)

// // 8 - Metodos na funcao construtora 
// Cachorro.prototype.uivar = function () {
//     console.log("Auuuuu!");
// }

// husky.uivar();

// // 9 - Classes ES6
// class CachorroClasse{
//     constructor(nome, raca){
//         this.nome = nome;
//         this.raca = raca;
//     }
// }

// const kira = new CachorroClasse("Kira","Labrador")
// console.log(kira)

// // 10 - mais sobre classes
// class Caminhao{
//     constructor(eixos, cor){
//         this.eixos = eixos
//         this.cor = cor
//     }

//     descreverCaminhao(){
//         console.log(`Esse caminhao tem ${this.eixos} eixos e é da cor ${this.cor}`)
//     }
// }

// const scania = new Caminhao(6, "Vermelho")

// console.log(scania)

// scania.descreverCaminhao()

// // 11 - Override
// class Humano {
//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }

// }

// const erfon = new Humano("Erfon", 20)
// console.log(erfon)

// Humano.prototype.idade = "Não definida";

// console.log(erfon.idade)
// console.log(Humano.prototype.idade)

// 12 - Symbol
class Aviao {
    constructor(marca, turbinas){
        this.marca = marca 
        this.turbinas = turbinas
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2
Aviao.prototype[pilotos] = 3

const boeing = new Aviao("Boeing", 10)

console.log(boeing)
console.log(boeing[asas])
console.log(boeing[pilotos])

// 13 - Getters e Setters
class Post{
    constructor(titulo, descricao, tags){
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo(){
        return `Voce esta lendo ${this.titulo}`
    }

    set adicionarTags(tags){
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post", "Um post sobre programacao")

console.log(myPost)

console.log(myPost.exibirTitulo)

myPost.adicionarTags = "Programacao, javascript, react"

console.log(myPost)

// 14 - Heranca 
class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome){
        super(patas, patas)
        this.nome = nome
    }
}

const bixao = new Lobo(4, "Bixao")

console.log(bixao)

// 15 - instanceOf

console.log(bixao instanceof Lobo)
console.log(Lobo instanceof Mamifero)
console.log(new Lobo(4, "teste") instanceof Mamifero)
console.log(new Post("a", "teste") instanceof Lobo)


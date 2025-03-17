// // 1 - Arrays
// const lista = [1, 2, 3, 4, 5]

// console.log(lista)

// console.log(typeof lista)

// const itens = ["Erfon", true, 921, 0.214, []]

// console.log(itens)

// // 2 - mais sobre arrays
// const arr = ["a", "b", "c", "d", "e"]

// console.log(arr[0])
// console.log(arr[2])

// // 3 - Propriedades 
// const numbers = [5, 3, 4]

// console.log(numbers.length)

// const myName = "Erfon"

// console.log(myName.length)

// // 4 - Metodos
// const otherNumbers = [1, 2, 3]

// const allNumbers = numbers.concat(otherNumbers);

// console.log(allNumbers)

// const text = "algum texto"

// console.log(text.toUpperCase())

// console.log(typeof text.toUpperCase)

// console.log(text.indexOf("g"))

// // 5 - Objetos
// const person = {
//     name: "Erfon",
//     age: 20,
//     job: "Programador"    
// }

// console.log(person)
// console.log(person.name)
// console.log(person.age)
// console.log(person.job)

// console.log(person.name.length)
// console.log(typeof person)

// // 6 - Criando e deletando propriedades
// const car = {
//     engine: 1.6,
//     brand: "Hyundai",
//     model: "Creta",
//     km: 23000
// }

// console.log(car)

// car.doors = 4

// console.log(car)

// delete car.km

// console.log(car)

// //  7 - mais sobre objetos 
// const obj = {
//     a: "Teste",
//     b: true
// }

// console.log(obj instanceof Object)

// const obj2 = {
//     c: []
// }

// Object.assign(obj2, obj)

// console.log(obj2)

// // 8 - conhecendo melhor os objetos 

// console.log(Object.keys(obj))
// console.log(Object.keys(obj2))
// console.log(Object.keys(car))

// console.log(Object.entries(car))

// // 9 - Mutação

// const a = {
//     name: "Erfon"
// }

// const b = a;

// console.log(a)
// console.log(b)

// console.log(a === b)

// a.age = 20

// console.log(a)
// console.log(b)

// delete b.age

// console.log(a)
// console.log(b)

// // 10 - Loop em array
// const users = ["Erfon", "Panagis", "Cristiane", "Gerasimos"]

// for(let i = 0; i < users.length; i++){
//     console.log(`Listando o usuario: ${users[i]}`)
// }

// // 11 - Push e Pop
// const array = ["a", "b", "c"]

// console.log(array)

// array.push("d")

// console.log(array)

// array.pop()

// console.log(array)

// const itemRemoved = array.pop()

// console.log(itemRemoved)
// console.log(array)

// array.push("z", "x", "y")

// console.log(array)

// // 12 - Shift e Unshift
// const letters = ["a", "b", "c"]

// console.log(letters)

// const letterRemoved = letters.shift()

// console.log(letterRemoved)
// console.log(letters)

// letters.unshift("x")
// console.log(letters)

// letters.unshift("a", "z", "y")
// console.log(letters)

// // 13 - indexOf e lastIndexOf
// const myElements = ["Morango", "Uva", "Banana", "Maça", "Uva"]

// console.log(myElements.indexOf("Morango"))
// console.log(myElements.indexOf("Banana"))

// console.log(myElements[1])
// console.log(myElements[myElements.indexOf("Uva")])

// console.log(myElements.lastIndexOf("Uva"))

// console.log(myElements.indexOf("Siriguela"))
// console.log(myElements.lastIndexOf("Siriguela"))

// // 14 - Slice
// const testeSlice = ["a", "b", "c", "d", "e", "f"]

// const subArray = testeSlice.slice(2, 4)

// console.log(subArray)
// console.log(testeSlice)

// const subArray2 = testeSlice.slice(2, 4 + 1)
// console.log(subArray2)

// const subArray3 = testeSlice.slice(10, 20)
// console.log(subArray3)

// const subArray4 = testeSlice.slice(2)
// console.log(subArray4)

// // 15 - forEach
// const nums = [1, 2, 3, 4, 5]

// nums.forEach((numero) => {
//     console.log(`O numero e: ${numero}`)
// })

// const posts = [
//     {title: "Primeiro post", category: "PHP"},
//     {title: "Segundo post", category: "JavaScript"},
//     {title: "Terceiro post", category: "Python"}
// ]

// posts.forEach((post) => {
//     console.log(`Exibindo post: ${post.title} da categoria: ${post.category}`)
// })

// // 16 - Includes
// const brands = ["BMW", "Mercedes", "Hyundai"]

// console.log(brands.includes("BMW"))

// console.log(brands.includes("BYD"))

// if(brands.includes("BMW")){
//     console.log(`Ha carros da marca BMW!`)
// }

// // 17 - Reverse
// const reverseTest = [1, 2, 3, 4, 5]

// console.log(reverseTest)

// reverseTest.reverse()

// console.log(reverseTest)

// // 18 - Trim
// const trimTest = "   testando \n  "

// console.log(trimTest)
// console.log(trimTest.trim())

// console.log(trimTest.length)
// console.log(trimTest.trim().length)

// // 19 - padStart
// const testePadStart = "1"

// const newNumber = testePadStart.padStart(4, "0")

// console.log(testePadStart)
// console.log(newNumber)

// const testePadEnd = newNumber.padEnd(10, "0")

// console.log(testePadEnd)

// // 20 - Split
// const frase = "O rato roeu a roupa do rei de Roma"

// const arrayDaFrase = frase.split(" ")

// console.log(arrayDaFrase)

// // 21 - Join
// const fraseDeNovo = arrayDaFrase.join(" ")

// console.log(fraseDeNovo)

// const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

// const fraseDaCompra = `Nos precisamos comprar: ${itensParaComprar.join(", ")}.`

// console.log(fraseDaCompra)

// // 22 - Repeat
// const palavra = "Testando "

// console.log(palavra.repeat(5))

// // 23 - Rest Operator
// const somaInfinita = (...args) => {

//     let total = 0;

//     for(let i = 0; i < args.length; i++){
//         total += args[i]
//     }
   
//     return total;
// }

// console.log(somaInfinita(1, 2, 3))
// console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7, 8))

// 24 - For Of

const somaInfinita2 = (...args) => {

    let total = 0;

    for(num of args){
        total += num;
    }

    return total;
}

console.log(somaInfinita2(1, 2, 3))
console.log(somaInfinita2(1, 2, 3, 4, 5, 6, 7, 8))

// 25 - Destructuring em Objetos
const userDetails = {
    firstName: "Erfon",
    lastName: "Spanos",
    age: 20,
    job: "Programador"
}

const {firstName, lastName, age, job} = userDetails;

console.log(firstName, lastName, age, job)

// renomear variaveis
const {firstName: primeiroNome} = userDetails

console.log(primeiroNome)

// 26 - Destructuring com Arrays
const myList = ["Avião", "Submarino", "Carro", "Trator"]

const [veiculoA, veiculoB, veiculoC] = myList

console.log(veiculoA, veiculoB, veiculoC)
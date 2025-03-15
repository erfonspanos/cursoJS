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

// 6 - Criando e deletando propriedades
const car = {
    engine: 1.6,
    brand: "Hyundai",
    model: "Creta",
    km: 23000
}

console.log(car)

car.doors = 4

console.log(car)

delete car.km

console.log(car)

//  7 - mais sobre objetos 
const obj = {
    a: "Teste",
    b: true
}

console.log(obj instanceof Object)

const obj2 = {
    c: []
}

Object.assign(obj2, obj)

console.log(obj2)

// 8 - conhecendo melhor os objetos 

console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

console.log(Object.entries(car))
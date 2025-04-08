// // 1 - setTimeout
// console.log("Ainda nao executou")

// setTimeout(function(){
//     console.log("Requisicao Assincrona")
// }, 2000)

// console.log("Ainda nao executou 2")

// // 2 - setInterval
// console.log("Ainda nao comecou")

// // setInterval(function(){
// //     console.log("Intervalo Assincrono")
// // }, 3000)

// console.log("Ainda nao comecou 2")

// // 3 - Promise
// const promessa = Promise.resolve(5 + 5)

// console.log("Algum codigo")

// promessa
//     .then((value) => {
//         console.log(`A soma e ${value}`)
//         return value;
//     })
//     .then((value) => value - 1)
//     .then((value) => console.log(`Agora e ${value}`))

// console.log("Outro codigo")

// // 4 - Falha na promise
// Promise.resolve(4 * "asd")
// .then((n) => {
//     if(Number.isNaN(n)){
//         throw new Error ("Valores invalidos")
//     }
// })
// .catch((err) => console.log(`Um erro foi encontrado: ${err}`))

// 5 - Rejeição
function checkNumber(n){
    return new Promise((resolve, reject) => {
        if(n > 10){
            resolve(`O numero e maior que 10`)
        }else{
            reject(new Error("Numero muito baixo"))
        }
    })
}

const a = checkNumber(20)

const b = checkNumber(10)

a.then((v) => console.log(`o resultado e ${v}`))
    .catch((err) => console.log(`Um erro ocorreu: ${err}`))

b.then((v) => console.log(`o resultado e ${v}`))
    .catch((err) => console.log(`Um erro ocorreu: ${err}`))

// 6 - Resolvendo varias promises
const p1 = new Promise((resolve) => {
    setTimeout(function(){
        resolve(10)
    }, 1000)
})

const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve, reject) => {
    if(30 > 10){
        resolve(30)
    }else{
        reject("Erro!")
    }
})

Promise.all([p1, p2, p3]).then((values) => console.log(values))

// 7 - Async functions 
async function somarComDelay(a, b){
    return a + b
}

somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma e ${value}`)
})

console.log("teste async")

// 8 - Async await 
function resolveComDelay(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolveu a Promise")
        }, 2000)
    })
}

async function chamadaAsync() {
    console.log("Chamando a promise e esperando o resultado")
    const result = await resolveComDelay()
    console.log(`O resultado chegou: ${result}`)
}

chamadaAsync();

// 9 - Generators
function* generator(){
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
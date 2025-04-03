// 1 - Strict
"use strict";

// opa = "teste";

const opa = "teste";

// const undefined = 10;

// delete [].length;

// 2 - Console.log
let a = 1
let b = 2

if(a == 1){
    a = b + 2
}

console.log(a)

for(let i = 0; i < b; i++){
    a += 2
    console.log(a)
}

if(a > 5){
    a = 25
}

console.log(a)

// 3 - Debugger
let c = 1
let d = 2

if(c == 1){
    c = d + 2
}

// debugger;

for(let i = 0; i < d; i++){
    c += 2
}

console.log("Executou o loop")

// debugger;

if(c > 5){
    c = 25
}

// 4 - Tratamento de dados
function checkNumber(n){
    const result = Number(n);

    if(Number.isNaN(result)){
        console.log("Dado não é um número!");
        return;
    }

    console.log("Dado é um número!")
    return result;
}

checkNumber(5)
checkNumber("10")
checkNumber({})
checkNumber("teste")

// 5 - Exceptions
let x = 10;

if(x != 11){
    // throw new Error("the value of x cannot be different from 11!")
}

// 6 - Try Catch
try{
    const soma = x + y
}catch(error){
    console.log(`Erro no programa: ${error}`)
}

// 7 - Finally
try{
   const value = checkNumber("10")

    if(!value){
        throw new Error("Valor invalido!")
    }

} catch(error){
    console.log(`Opa, aconteceu um problema: ${error}`)
} finally{
    console.log("O codigo foi executado!")
}

// 8 - Assertion
function checkArray(arr){
    if(arr.length === 0){
        throw new Error("A array nao pode ser vazia!")
    }else{
        console.log(`A array possui ${arr.length} elementos.`)
    }
}

// checkArray([]);
checkArray([1,2,3])
// // 1 - Criando uma função
// function minhaFuncao(){
//     console.log("Testando")
// }

// minhaFuncao();

// const minhaFuncaoEmVariavel = function (){
//     console.log("Funcao em variavel")
// }

// minhaFuncaoEmVariavel();

// function funcaoComParametro(txt){
//     console.log(`Imprimindo: ${txt}`)
// }

// funcaoComParametro("Alguma coisa");
// funcaoComParametro("Outra coisa");

// // 2 - Return
// const a = 10
// const b = 20
// const c = 30
// const d = 40

// function soma(n1, n2){
//     return n1 + n2;
// }

// const result = soma(a,b)
// console.log(result)
// console.log(soma(a,c))
// console.log(soma(c,d))
// console.log(soma(b,d))

// // 3 - Escopo da funcao
// let y = 10;

// function testandoEscopo(){
//     let y = 20;
//     console.log(`Y dentro da funcao e: ${y}`);
// }

// testandoEscopo();

// console.log(`Y fora da funcao e: ${y}`)

// testandoEscopo();

// // 4 - Escopo aninhado
// let m = 10

// function escopoAninhado(){
//     let m = 20;

//     if(true){
//         let m = 30;

//         if(true){
//             let m = 40;

//             console.log(m)
//         }

//         console.log(m)
//     }

//     console.log(m)
// }

// escopoAninhado();

// console.log(m)

// // 5 - Arrow function
// const testeArrow = () => {
//     console.log("esta e uma arrow function")
// }

// testeArrow();

// const parOuImpar = (n) => {
//     if(n%2 === 0){
//         console.log(`${n} e Par`)
//         return
//     }
//     console.log(`${n} e Impar`)
// }

// parOuImpar(4);
// parOuImpar(12413);

// // 6 - mais sobre Arrow Functions
// const raizQuadrada = (x) => {
//     return x*x;
// }

// console.log(raizQuadrada(4))

// const raizQuadrada2 = (x) => x*x;

// console.log(raizQuadrada2(13))

// const helloWorld = () => console.log("Hello World!")

// helloWorld();

// console.log(helloWorld())

// // 7 - Parametro opcional
// const multiplicacao = function(m,n){

//     if(n === undefined){
//         return m * 2;
//     }else{
//         return m*n;
//     }
// }

// console.log(multiplicacao(4))

// console.log(multiplicacao(12, 8))

// const greeting = (name) => {

//     if(!name){
//         console.log("Ola")
//         return
//     }

//     console.log(`Ola, ${name}`)
// }

// greeting();
// greeting("Erfon")

// // 8 - Valor default
// const customGreeting = (name, greet = "Ola") => {
//     return `${greet}, ${name}!`;
// }

// console.log(customGreeting("Erfon"))
// console.log(customGreeting("Pedro", "Eai"))

// const repeatText = (text, repeat = 2) => {

//     for(let i = 0; i < repeat; i++){
//         console.log(text)
//     }
// }

// repeatText("Deita aqui")
// repeatText("Eu mandei voce deitar", 5)

// // 9 - Closure
// function someFunction(){
//     let txt = "Alguma coisa"
    
//     function display(){
//         console.log(txt);
//     }

//     display();
// }

// someFunction();

// // 10 - mais sobre closures 
// const multiplicationClosure = (n) => {
//     return (m) => {
//         return n*m;
//     }
// }

// const c1 = multiplicationClosure(5);
// const c2 = multiplicationClosure(10);

// console.log(c1);
// console.log(c2);

// console.log(c1(5))
// console.log(c2(10))

// 11 - Recursividade
const untilTen = (n,m) => {
    if(n<10){
        console.log("A funcao parou de executar")
    } else{
        const x = n - m;

        console.log(x)

        untilTen(x,m);
    }
}

untilTen(100,7)

function factorial(x){
    if(x === 0){
        return 1;
    }else{
        return x * factorial(x-1)
    }
}

const num = parseInt(prompt("Digite um numero"))

const result = factorial(num)

console.log(`O fatorial de ${num} é = ${result}`)
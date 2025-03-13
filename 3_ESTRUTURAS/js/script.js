// 1 - Variaveis
// let nome = "Erfon";
// console.log(nome);

// nome = "Erfon Spanos";
// console.log(nome);

// const idade = 20;
// console.log(idade);

// console.log(typeof nome);
// console.log(typeof idade);

// 2 - mais sobre variaveis
// let 2teste = "invalido"
// let @teste = "invalido"

// let a = 10, b = 20, c = 30;

// console.log(a,b,c);

// const nomecompleto = "Erfon Spanos";
// const nomeCompleto = "Panagis Spanos";

// console.log(nomecompleto);
// console.log(nomeCompleto);

// let _teste = "ok";
// let $teste = "ok";

// console.log(_teste, $teste);

// 3 - Prompt
// const age = prompt("Digite sua idade:");

// console.log(`Voce tem ${age} anos.`);

// 4 - Alert
// alert("Testando");

// const z = 10;

// alert(`O numero e ${z}`);

// 5 - Math 
// console.log(Math.max(5,2,1,10))

// console.log(Math.floor(5.71))
// console.log(Math.ceil(5.71))

// 6 - Console
// console.log("teste");

// console.error("erro!");

// console.warn("aviso!");

// 7 - If
// const m = 10;

// if(m > 5){
//     console.log("M e maior que 5")
// }

// const user = "Joao"

// if(user === "Joao"){
//     console.log("Voce e joao")
// }

// if(user === "Maria"){
//     console.log("Voce e maria")
// }

// 8 - Else
// const loggedIn = false;

// if(loggedIn){
//     console.log("Esta autenticado!")
// }else{
//     console.log("Voce nao esta autenticado")
// }


// const q = 10;
// const w = 25;

// if(q > 5 && w > 20){
//     console.log("Numeros maiores")
// }else{
//     console.log("Os numeros nao sao maiores")
// }

// 9 - Elseif
// if(1>2){
//     console.log("Teste")
// }else if(2>3){
//     console.log("Teste2")
// }else if(5>1){
//     console.log("Agora sim!")
// }

// const userName = "Erfon"
// const userAge = 20

// if(userName === "Jose"){
//     console.log("Voce e Jose")
// }else if(userName === "Erfon" && userAge === 20){
//     console.log("Ola Erfon! Voce tem 20 anos")
// }else{
//     console.log("Nenhuma condicao foi cumprida")
// }

// 10 - While
// let p = 0

// while(p < 5){
//     console.log(`Repetindo ${p}`)
//     p++;
// }

// 11 - Do While
// let o = 10

// do{
//     console.log(`Valor de ${o}`)
//     o--
// }while(o>1)

// 12 - For
// for(let i = 0; i<10; i++){
//     console.log(`Imprimindo ${i}x`)
// }

// 13 - Identacao

// 14 - break
// for(let i = 20; i>10; i--){
//     console.log(`O valor de I = ${i}`)

//     if(i === 15){
//         console.log("O i e identico a 15")
//         break
//     }
// }

// 15 - Continue 
// for(let i = 0; i < 10; i++){
//     // operador resto %
//     if(i%2 === 0){
//         console.log("Numero par!")
//         continue
//     }
//     console.log(i)
// }

// 16 - Switch Case

const job = "Advogado";

switch(job){
    case "Programador":
        console.log("Voce e um Programador")
        break
    case "Dentista":
        console.log("Voce e um Dentista")
        break
    case "Advogado":
        console.log("Voce e um Advogado")
        break
    default:
        console.log("Profissao nao encontrada!")
}
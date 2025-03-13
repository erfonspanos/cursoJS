// 1 - Number
console.log(typeof 2);
console.log(typeof 5.17);
console.log(typeof -128);

// 2 - operacoes aritmeticas
console.log(2+4);
console.log(10-5);
console.log(5*4);
console.log(10/2);

console.log(5 + (4*2));

// 3 - special numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);

console.log(12 * "afsaf");

console.log(typeof NaN);

// 4 - Strings
console.log("Um texto");
console.log(`Mais um texto`);
console.log(typeof 'Outro texto');

// 5 - Simbolos especiais em strings
console.log("testando a \nquebra de linha");

console.log("espacamento de \t tab");

// 6 - Concatenação
console.log("Um "+"texto "+"concatenado");

// 7 - Template Strings
console.log(`A soma de 2 + 2 = ${2 + 2}`);

// 8 - Boolean
console.log(true);

console.log(5 > 20);

console.log(30 > 10);

console.log(typeof false);

// 9 - Comparações

console.log(5 <= 5);

console.log(5 < 5);

console.log(10 == 10);

console.log(10 == 9);

console.log(10 != 9);

// 10 - Idêntico
console.log(9 == "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

// 11 - Operadores Logicos
console.log(true && true);

console.log(true && false);

console.log(5>2 && 2<10);

console.log(5>2 && "Erfon" === 1);

console.log(5>2 || "Erfon" === 1);

console.log(5 < 2 || 10 > 1000);

console.log(!true);

console.log(!5 > 2);

// 12 - Empty Values
console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

// 13 - Mudanca de Tipos
console.log(5 * null);

console.log("Teste" * "Opa");

console.log("10" + 1);

console.log("10" - 1);
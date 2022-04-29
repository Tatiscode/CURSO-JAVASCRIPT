//slice. Copia independiente de arreglos
let numeros = [1, 3, 3453, 77];
let copia = numeros;
console.log("Copia: ", copia);
numeros[0] = 9999;
console.log("Copia: ", copia);
copia[1] = 3333333;
console.log("Original: ", numeros);
console.log("-------copia independiente-------");
let numeros_1 = [1, 3, 3453, 77];
let copia1 = numeros_1.slice();
numeros_1[0] = 44444;
console.log("Copia1 :", copia1);
console.log("Original 1 :", numeros_1);


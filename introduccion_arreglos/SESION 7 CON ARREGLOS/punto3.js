// 3. Dado el arreglo [1,2,3,4,5,6]
// ● Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.

let arreglo0=[1,2,3,4,5,6 ];
let numero = 0;
while (numero < arreglo0.length) {
    console.log(arreglo0[numero]);
    numero++
}
console.log("-------------------------------")

// ● Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.

let arreglo1=[1,2,3,4,5,6 ];
for (let i = 0; i < arreglo1.length; i++) {
    console.log ("ELEMENTO : ", arreglo1[i]);
}
console.log("-------------------------------")

// ● Mostrar todos los elementos dentro del arreglo sumándole uno a cada uno.

let arreglo2=[1,2,3,4,5,6 ];
for (let i = 0; i < arreglo2.length; i++) {
    console.log ("VALOR INICIAL",arreglo2[i],"VALOR FINAL:", arreglo2[i]+1);
}
console.log("-------------------------------")

// ● Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.

let arreglo3=[1,2,3,4,5,6 ];
let arregloImplemento=[];
for (let index = 0; index < arreglo3.length; index++) {
    arregloImplemento.push(arreglo3[index] + 1);
    console.log ("COPIA DE LOS ELEMENTOS :" , arregloImplemento)
}
console.log("-------------------------------")

// ● Calcular el promedio de todos los elementos del arreglo

let arreglo4=[1,2,3,4,5,6 ];
let suma = 0
for (let i = 0; i < arreglo4.length; i++) {
    suma = suma+arreglo4[i]
    console.log ("ELEMENTO : ", arreglo4[i]);
}
console.log("EL PROMEDIO DE LOS ELEMENTOS ES :" , suma / arreglo4.length);

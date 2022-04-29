//1. Dado el siguiente arreglo [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]:

//Iterar por todos los elementos del arreglo utilizando while y mostrarlos en pantalla.
let arreglo = [ [1, 2, 3], [4, 5, 6], [7,8, 9] ]
console.log("-----------------------");
for (let i = 0; i < arreglo.length; i++){
    for (let j = 0; j < arreglo[i].length; j++){
        console.log(arreglo[i][j]);
        
    }
}
//Iterar por todos los elementos del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
let arreglo1 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
console.log("-----------------------");
for (let i = 0; i < arreglo1.length; i++){
    for (let j = 0; j < arreglo1[i].length; j++){
        console.log(arreglo1[i][j]);
        
    }
}
console.log("-------------------------------------")
//Crear otro arreglo que sea idéntico al arreglo dado, pero con todos los elementos incrementados en 1.
////Para esto debe usar ciclo for y a través de iteraciones ir formando el nuevo arreglo con sus elementos tal cual se piden
let arreglo2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
let copia = [];

for (let i = 0; i < arreglo2.length; i++){
    let array = []
    for (let j = 0; j < arreglo2[i].length; j++){
        
        array.push (arreglo2[i][j]+1)
        
    }
  copia.push(array);
}

console.log("el arreglo con sus elementos aumentados en 1 es: ",copia);

//Usando el ciclo “for” Calcular el promedio de todos los elementos del arreglo

let promedio =  [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
let dato = 0;
let suma = 0;

for (let i = 0;i < promedio.length; i++) {
    const element = promedio[i];
    for (let x = 0; x < promedio.length; x++) {
        suma = suma+element[x]
        dato ++
        
    }  
}
console.log("el promedio del arreglo es : ",suma/dato)
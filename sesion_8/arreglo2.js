//Programe una función que permita encontrar el número menor contenido en una matriz recibida como parámetro.

let arreglo2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
let numero = 0;
let menor = 3;

for (let i = 0; i < arreglo2.length; i++){
    for (let j = 0; j < arreglo2[i].length; j++){
        
    if(arreglo2[i][j]<menor){
        menor = arreglo2[i][j];
    }
    
}
 
}
console.log ("el numero menor es:",menor)

//1. Cree un programa que use una función de un parámetro, a la cual se le pase como argumento un arreglo, de
//tal manera que la función retorne la longitud(número de elementos) del arreglo

let arreglo =[1,2,3,4,5,6,7,8,9]
function longitud(array){
    return array.length
}
console.log("la longitud del arreglo es: ",longitud(arreglo))

//3. Cree un programa que implemente una función que reciba como argumento un arreglo y retorne la suma de
//los cuadrados de sus elementos, luego, imprima el resultado.

let arreglo1 =[1,2]
let suma = 0;
function cuadrado(datos){
    for (let i = 0; i <datos.length; i++) {
        suma = suma + datos[i]*datos[i]
        
    }

    return suma 
}
console.log("El resultado de a suma de los elementos del arreglo es: ",cuadrado(arreglo1))
//SINTAXIS DE UNA FUNCION EN JAVASCRIPT
//se una la palabra reservada FUNCTION,seguida de el nombre de la funcion el cual debe empezar
//por miniscula y usar notacion lowerCamelCase ,luego se sigue con parentesis donde iren los
// parametros (si tiene ) de la funcion, luego llaves que contentran bloque de instrucciones 
//y por ultimo el retorno si es que tiene 

//SNIPER:fragmentos de codigo 
//FUNCION QUE RECIBE UN NUMERO Y RETORNA SU CUADRADO
function cuadradoNumero(numero) {
    let cuadrado = numero * numero ;
    return cuadrado ;
}
let n =parseFloat(prompt("Ingrese numero:"));
let valor = cuadradoNumero(n);
console.log ("El numero", n , "elevado al cuadrado es :",valor );

//FUNCION DE DOS ARGUMENTOS
//FUNCION QUE RETORNE LA SUMA DE DOS NUMEROS 
let numeroA = parseFloat (prompt("Ingrese primer numero:"));
let numeroB = parseFloat (prompt("Ingrese segundo numero:"));
function suma(a,b) {
    let sumaNumeros = a + b;
    return sumaNumeros ;
}
let total = suma(numeroA , numeroB)
console.log ("La suma de los numeros ",numeroA, "y", numeroB, "es:" ,total)
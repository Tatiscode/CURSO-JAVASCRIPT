// 2. Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales
// y otra con estructura switch-case.

let numero = parseFloat (prompt("Ingrese un numero:"));
function paroimpar (numero) {
    if (numero % 2 == 0 ) {
        return "El numero" +numero+ "es par"
    }else {
        return "El numero" +numero+ "es impar"
    }
}
console.log (paroimpar (numero))


// switch-case 
let numero= parseFloat (prompt("Ingrese un numero:"));
function  paroimpar (numero) {
    paroimpar = (numero % 2 )
    switch (paroimpar) {
        case 0:
            return "El numero " +numero+ " es un numero par"
        default:
            return "El numero " +numero+ " es un numero impar"
    }
}
console.log (paroimpar (numero));

// 3. Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
// condicionales y otra con estructura switch-case.
let numero = parseFloat (prompt("Ingrese un numero:"));
function divisible (numero) {
    if (numero % 5 == 0 ) {
        return "El numero " +numero+ " si es divisible por 5"
    }else {
        return "El numero " +numero+ " no es divisible por 5"
    }
}
console.log (divisible (numero))


// switch-case 
let numero= parseFloat (prompt("Ingrese un numero:"));
function  divisible (numero) {
    divisible = (numero % 5 )
    switch (divisible) {
        case 0:
            return "El numero " +numero+ " si es divisible por 5"
        default:
            return "El numero " +numero+ " no es divisible por 5"
}
}
console.log (divisible (numero))
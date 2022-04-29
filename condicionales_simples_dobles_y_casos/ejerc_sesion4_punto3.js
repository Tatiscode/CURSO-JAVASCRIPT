// 3. Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
// condicionales y otra con estructura switch-case.

//VERSION CONDICIONALES
console.log("SECCIÓN 4");
console.log('CONDICIONAL-SIMPLE-NUMERO5')
let num = parseInt( prompt("Ingrese un numero : "));
if (num % 5 == 0) {
    console.log("El numero ingresado si es divisible por 5")
} else {
    console.log("El numero ingresado no es divisible por 5")
}


//ESTRUCTURA SWITCH_CASE
console.log("SECCIÓN 4");
console.log('ESTRUCTURA SWITCH-CASE')
let num = parseInt( prompt("Ingrese un numero : "));
proceso = num % 5
switch (proceso) {
    case 0:
        console.log("El numero ingresado si es divisible por 5")
        break;
    default:
        console.log("El numero ingresado no es divisible por 5")
        break;
}

// 2. Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales
// y otra con estructura switch-case

//VERSION CONDICIONALES
console.log("SECCIÓN 4");
console.log('CONDICIONAL-SIMPLE-NUMEROS')
let num = parseInt( prompt("Ingrese un numero : "));
if (num % 2 == 0 ) {
    console.log ("El numero",num,"si es un numero par");
} else {
    console.log ("El numero",num, "no es un numero par")
};


//ESTRUCTURA SWITCH_CASE
console.log("SECCIÓN 4");
console.log('ESTRUCTURA SWITCH-CASE')
let num = parseInt( prompt("Ingrese un numero : "));
const PROCESO = num % 2
switch (PROCESO) {
    case 0 :
        console.log ("El numero ingresado si es un numero par");
        break;
    default:
        console.log ("El numero ingresado no es un numero par");
        break;
}


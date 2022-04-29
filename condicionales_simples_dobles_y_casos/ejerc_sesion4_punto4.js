// 4. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con
// condicionales y otra con estructura switch-case

//VERSION CONDICIONALES
console.log("SECCIÓN 4");
console.log('CONDICIONAL-SIMPLE-NUMERO5')
let num = parseInt( prompt("Ingrese un numero : "));
if (num == 2 || num == 3 || num == 5 || num == 7 || num ==11 || num ==13 ) {
    console.log ("El numero", num ,"si es un numero primo");
} else  {
    console.log ("El numero ", num ,"no es un numero primo");
}


//ESTRUCTURA SWITCH_CASE
console.log("SECCIÓN 4");
console.log('ESTRUCTURA SWITCH-CASE')
let num = parseInt( prompt("Ingrese un numero : "));
switch (num) {
    case 2:
        console.log("El numero 2 si es primo")
        break;
        case 3:
        console.log("El numero 3 si es primo")
        break;
        case 5:
        console.log("El numero 5 si es primo")
        break;
        case 7:
        console.log("El numero 7 si es primo")
        break;
        case 11:
        console.log("El numero 11 si es primo")
        break;
        case 13:
        console.log("El numero 13 si es primo")
        break;
    default:
        console.log ("El numero",num ,"no es un numero primo")
        break;
}
// 4. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con
//condicionales y otra con estructura switch-case
let numero = parseFloat (prompt("Ingrese un numero:"));
function primo (numero) {
    if (numero == 2 || numero == 3 || numero ==  5 || numero == 7 || numero == 11 || numero == 13) {
        return "El numero " +numero+ " si es primo"
    }else {
        return "El numero " +numero+ " no es primo"
    }
}
console.log (primo (numero))


// switch-case 
let numero= parseFloat (prompt("Ingrese un numero:"));
function  primo (numero) {
    primo = (numero)
    switch (primo) {
        case 2:
            return "El numero " +numero+ " si es primo"
            case 3:
            return "El numero " +numero+ " si es primo"
            case 2:
            return "El numero " +numero+ " si es primo"
            case 5:
            return "El numero " +numero+ " si es primo"
            case 7:
            return "El numero " +numero+ " si es primo"
            case 11:
            return "El numero " +numero+ " si es primo"
            case 13:
            return "El numero " +numero+ " si es primo"
        default:
            return "El numero " +numero+ " no es un primo"
    }
}
console.log (primo(numero));

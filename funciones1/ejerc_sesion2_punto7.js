//Cree un programa que tome un número real e imprima su valor absoluto
let numero = parseFloat (prompt("Ingrese un numero:"));
function valor (numero) {
    if (numero < 0) {
        return numero * -1
    }else {
        return numero
    }
}
let total1 = valor (numero)
console.log ("El valor absoluto del numero ingresado es:", total1 )
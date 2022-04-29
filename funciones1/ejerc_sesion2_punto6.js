//Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre esa cantidad
let numero = parseFloat (prompt("Ingrese la cantidad :"));
let porcentaje = parseFloat (prompt("Ingrese el porcentaje a calcular:"));
function pNumero (numero , porcentaje ) {
    let valorFinal = numero * porcentaje / 100 ;
    return valorFinal ;
}
let total1 = pNumero (numero , porcentaje)
console.log ("El porcentaje del numero ingresado es :", total1 )





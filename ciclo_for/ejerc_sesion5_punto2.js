//2. Cree un programa que imprima la tabla de multiplicar del 3, del 0 al 50. Use ciclo for. Use funciones.
function multiplicar() {
   console.log ("TABLA DEL NUMERO 3")
    for (let index = 0; index <= 50; index++ ) {
       console.log ( "3"  + "x" + index + "=" + (3*index));
    }
}
console.log (multiplicar())
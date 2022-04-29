//CICLO WHILE: LO USAMOS CUANDO NO SABEMOS
//EL NUMERO DE ITERACIONES QUE TENDRA EL CICLO.
//ESTE CICLO DEPENDE DE UNA CONDICION
//MIENTRAS LA CONDICION SEA VERDADERA, EL CICLO
//SE EJECUTARA. SE DEBE IMPLEMENTAR UNA VARIABLE
//DE CONTROL DEL CICLO, LA CUAL GARANTIZARA QUE
//EL CICLO ALGUNA VEZ TERMINE, O SEA, QUE LA CONDICION
//ALGUNA VEZ NO SE CUMPLA, QUE SEA FALSE.

//CICLO QUE IMPRIME LOS NUMEROS DEL 0 AL 9
//NOTA: DESCOMENTAR

let control = 0

while ( control <= 9 ) {
    console.log(control);
    control++;
} 

//un programa que pida letras al usuario ,
// las imprima y deje de pedirlas si el usuario
//introduce q
//aca la variable control es "letra"
let letra = prompt("Ingrese Letra");
while(letra != "q"){
    console.log("letra : ", letra);
    letra = prompt("Ingrese Letra");
}
console.log("letra : ", letra);
console.log("Fin del programa");

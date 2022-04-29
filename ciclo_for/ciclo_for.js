// ciclo for
// index es el itedarador o varible control del for el primero de los tres componentes (separados por ;) del for es el iterador con su valor inicial,
// el segundo componente es la condicion la cual sabemos cuando dejara de cumplirse ,mientas se cumpla el ciclo de ejecucion, el tercer componente es
// la variacion del iterador, lo que hara que el ciclo deje de ejecutarse alguna vez vez.
for (let index = 0; index < 10; index++) {
   console.log (index);
}
console.log ("-------------------------------------------")

// NO SIEMPRE SE USA EL ITERADOR EN EL BLOQUE DE INSTRUCCIONES .ELEMPLO:
for (let index = 0; index < 200; index++) {
    console.log ("Hola ADSI 2469181");
 }
 console.log ("-------------------------------------------")

//  //Cree un programa que pida 10 letras al usuario y las imprima
 for (let index = 15; index < 26; index++) {
     let letra = prompt ("Ingrese las letras :")
    console.log (letra);
 }
 console.log ("-------------------------------------------")

 //cre un programa que muestre la tabla del 7 del 10 al 50
 console.log ("TABLA DEL NUMERO 7")
 for (let index = 10; index <= 50; index++ ) {
    console.log ( "7"  + "x" + index + "=" + (7*index));
 }
//Cree un programa que tome el lado de un cubo e imprima su volumen
let lado = parseFloat (prompt("Ingrese un lado del cubo:"));
function volumen (lado) {
    let volumenCubo = lado * lado * lado;
    return volumenCubo ;
}
let total = volumen(lado)
console.log ("El volumen del cubo es:", total )


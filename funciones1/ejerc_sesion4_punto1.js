// Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
// triángulo o no. Realice una versión con condicionales y otra con estructura switch-case

// let angulo1 = parseFloat (prompt("Ingrese el primer angulo del triangulo:"));
// let angulo2 = parseFloat (prompt("Ingrese el segundo angulo del triangulo:"));
// let angulo3 = parseFloat (prompt("Ingrese el tercer angulo del triangulo:"));
// function internos (angulo1, angulo2,angulo3) {
//     if (angulo1 + angulo2 + angulo3 ==180 ) {
//         return "Los angulos ingresados si corresponden a un triangulo"
//     }else {
//         return "Los angulos ingresados no corresponden a un triangulo"
//     }
// }
// console.log (internos (angulo1, angulo2,angulo3))

// switch-case 
let angulo1 = parseFloat (prompt("Ingrese el primer angulo del triangulo:"));
let angulo2 = parseFloat (prompt("Ingrese el segundo angulo del triangulo:"));
let angulo3 = parseFloat (prompt("Ingrese el tercer angulo del triangulo:"));
function internos (angulo1, angulo2,angulo3) {
    triangulo = (angulo1 + angulo2 + angulo3)
    switch (triangulo) {
        case 180:
            return "Los angulos ingresados si corresponden a un triangulo"
        default:
            return "Los angulos ingresados no corresponden a un triangulo"
    }
}
console.log (internos (angulo1, angulo2,angulo3));
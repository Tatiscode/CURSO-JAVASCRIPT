//Cree un programa que tome la base y la altura de un triángulo e imprima su área.
let base = parseFloat (prompt("Ingrese la base del triangulo:"));
let altura = parseFloat (prompt("Ingrese la altura del triangulo:"));
function area (base , altura) {
    let areaTriangulo = (base * altura)/2;
    return areaTriangulo ;
}
let total = area(base , altura)
console.log ("El area del triangulo es:", total )
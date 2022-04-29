//Cree un programa que tome el radio de un círculo e imprima su área y perímetro
let radio = parseFloat (prompt("Ingrese el radio del circulo:"));
function area (radio) {
    let areaCirculo = 3.1415 * radio * radio;
    return areaCirculo ;
}
let total1 = area(radio)
console.log ("El area del circulo es:", total1 )


function perimetro (radio) {
    let perimetroCirculo = 2 * 3.1415 * radio ;
    return perimetroCirculo ;
}
let total2 = perimetro(radio)
console.log ("El perimetro del circulo es:", total2 )
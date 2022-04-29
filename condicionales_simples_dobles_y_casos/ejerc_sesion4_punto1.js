//1. Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un
//triángulo o no. Realice una versión con condicionales y otra con estructura switch-case

//VERSION CONDICIONALES
console.log("SECCIÓN 4");
console.log('CONDICIONAL-SIMPLE-TRIANGULO')
let ang1 = parseInt( prompt("Ingrese el primer angulo :: "));
let ang2 = parseInt (prompt("Ingrese el segundo angulo : "));
let ang3 = parseInt (prompt("Ingrese el tercer amgulo : "));
if ( ang1 + ang2 + ang3 == 180 ){
    console.log ("Los angulos si corresponden a un triangulo");
  }else{
    console.log ("Los angulos no corresponde a un triangulo ")
  };


//ESTRUCTURA SWITCH_CASE
console.log("SECCIÓN 4");
console.log('ESTRUCTURA SWITCH-CASE')
let ang1 = parseInt( prompt("Ingrese el primer angulo : "));
let ang2 = parseInt (prompt("Ingrese el segundo angulo : "));
let ang3 = parseInt (prompt("Ingrese el tercer angulo : "));
let triangulo = ang1 + ang2 + ang3 
switch (triangulo) {
  case 180:  
    console.log ("Los angulos si corresponden a los de un triangulo")
    break;
  default:
    console.log("Los angulos no corresponden a los de un triangulo")
    break;
}
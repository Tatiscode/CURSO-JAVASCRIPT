//Cree un programa que lea la edad de un usuario e imprima un mensaje que diga si el usuario es mayor de edad o no
let edad = parseInt (prompt("Ingrese edad:"));
function mayor (edad) {
    if (edad >=18 ) {   
        return "La persona es mayor de edad " + edad
    }else {
        return "La persona es menor de edad " + edad
    }
}
console.log (mayor(edad))
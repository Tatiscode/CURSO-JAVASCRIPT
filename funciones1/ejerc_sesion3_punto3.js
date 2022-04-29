// 3. Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales
// también se debe mostrar al usuario.
let numero1 = parseFloat (prompt("Ingrese el primer  numero:"));
let numero2 = parseFloat (prompt("Ingrese el segundo numero:"));
function valor (numero1,numero2) {
    if (numero1 > numero2) {
        return "El numero " + numero1 + "es el mayor" 
    }else if( numero2 > numero1) {
        return "El numero " + numero2 + "es el mayor " 
    } else if( numero1==numero2)
    return "Los numeros ingresados son iguales" + numero1 + numero2;
}

console.log (valor (numero1,numero2));
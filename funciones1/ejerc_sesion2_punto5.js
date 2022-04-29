//Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene siempre un descuento del 10%.
let precio = parseFloat (prompt("Ingrese el rprecio del producto:"));
function idescuento (precio) {
    let precioFinal = precio - precio * 0.1 ;
    return  precioFinal ;
}
let total1 = descuento (precio)
console.log ("El precio final del producto es :", total1 )

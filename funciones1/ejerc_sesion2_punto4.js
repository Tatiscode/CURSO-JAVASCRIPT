//Cree un programa que tome el precio de un producto e imprima su precio final al consumidor con un IVA de 19 %
let precio = parseFloat (prompt("Ingrese el rprecio del producto:"));
function ivaFinal (precio) {
    let precioFinal = precio * 1.19 ;
    return  precioFinal ;
}
let total1 = ivaFinal (precio)
console.log ("El precio final del producto es :", total1 )

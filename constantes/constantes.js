// //PARA DEFINIR CONSTANTES USAMOS SU NOMBRE WN MAYUSCULAS PRECEDIDO DE LA PALANBRA CONST
// const PI = 3.14;
// const GRAVEDAD = 9.8;
// const IVA = 0.19;
// //CONSTANTE CADENA 
// const NACIONALIDAD = "Colombia"

//EJERCICIO1:crear un programa que pida el precio de un articulo y muestre su precio final con un iva siempre del 19%
console.log("EJERCICIO IVA")
let precio = prompt("INGRESE PRECIO");
console.log("EL PRECIO INGRESADO ES:" , precio)
let conversion = parseFloat(precio)
const IVA = 0.19;
console.log("EL PRECIO DEL IVA ES DE:")
let precioIva =  conversion*IVA;
console.log(precioIva)
let precioFinal = conversion+precioIva;
console.log("EL PRECIO FINAL DEL PRODUCTO ES DE :" , precioFinal)
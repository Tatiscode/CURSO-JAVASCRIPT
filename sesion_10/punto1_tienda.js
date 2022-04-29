// 1. Cree un programa que pida al usuario el nombre de un producto existente en una tienda, luego, que le muestre
// el precio del producto. El usuario debe poder elegir de entre por lo menos cinco productos. Use diccionarios
let  diccionarioTienda={arroz:1700, panela:4400, lentejas:2700, leche:4000 , galletas:1000, garbanzos:4500, espagueti:3000};
let producto =prompt("INGRESE EL NOMBRE DEL PRODUCTO DEL CUAL QUIERE SABER SU COSTO (ARROZ-PANELA-LENTEJAS-LECHE-GALLETAS-GARBANZO-ESPAGUETI):")
document.write("El producto " ,producto ," tiene un costo de: " ,diccionarioTienda[producto] ,"Pesos");
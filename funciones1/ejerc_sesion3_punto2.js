// En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
// pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
// mencionados y muestre si el producto paga IVA o no

let producto = prompt("Ingrese producto:");
function iva (producto) {
    if (producto == "vino" || producto == "crema" ) {   
        return "El producto si aplica para IVA " 
    }else {
        return "El producto no aplica para IVA " 
    }
}
console.log (iva(producto))
// 4. Cree un programa que dado un número entero n, calcule su factorial(n!). Use ciclo for. Use funciones
let numero =parseInt(prompt("Ingrese numero a calcular: "))
function factorial(numero) {
    let numero1 = 1
for (let index = 1; index <= numero ; index++) {
    numero1 = numero1 * index
}
console.log ("El numero factorial  de  " + numero + " es :" + numero1)
}
console.log (factorial(numero));

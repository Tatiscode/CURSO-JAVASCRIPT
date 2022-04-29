/*
Cree un programa que calcule la suma 
de los cuadrados de los números entre 1 y n.
*/
let n = parseInt(prompt("Ingrese limite superior"));
let control = 1;
let sumatoria = 0;
while (control <= n) {
    sumatoria = sumatoria + control * control;
    control++;
}
console.log("Suma :", sumatoria);
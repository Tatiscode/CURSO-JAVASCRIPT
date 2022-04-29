//3. Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use funcione
let n = parseFloat(prompt("Ingrese la cantidad de estudiantes :"));
function promedio() {
    for (let i = 0; i < n; i++) {
    let nota1 = parseInt(prompt("Ingrese la primera nota del estudiante :"));
    let nota2 = parseInt(prompt("Ingrese la segunda nota del estudiante :"));
    let nota3 = parseInt(prompt("Ingrese la tercera nota del estudiante :"));
    let calificacion = nota1 + nota2 + nota3 
    let final = calificacion/3
    console.log ("El promedio final del estuduiante es :" + final)
     }    
} 
console.log(promedio());
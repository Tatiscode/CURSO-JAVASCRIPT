/*
Cree un programa que pregunte al usuario si 
desea salir, si o no “S/N”, si el usuario 
teclea la letra S el programa se detendrá, 
de lo contrario continuará ejecutándose.
*/
let control = prompt('Desea salir?');
while (control != "s" && control != "S") {
    control = prompt('Desea salir?');
}
console.log("Fin del programa");
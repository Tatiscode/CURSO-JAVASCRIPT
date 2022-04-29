//Diccionarios
/*
Un diccionario es una coleccion de elementos,
no ordenada, estos elementos son pares clave:valor.
La clave no debe ser un elemento mutable(p.e arreglos)
Los valores no tienen mayores restricciones(objetos, cadenas
    enteros etc)
*/
//definicion
let diccionario1 = { papa: 2000, arroz: 2600, aceite: 18000};
//lectura con sintaxis de punto. Esta sintaxis no es adecuada
//cuando las llaves no son cadenas(p.e enteros)
console.log("Precio de la papa: ", diccionario1.papa);
//lectura con sintaxis de corchete. Esta sintaxis es la adecuada
//para los recorridos
console.log("Precio de la papa: ", diccionario1["papa"]);
//asignacion
//asignar un nuevo par llave-valor
diccionario1["huevos"] = 7000;
console.log("Diccionario entero :", diccionario1);
//asignar un nuevo valor a una llave existente
diccionario1["aceite"] = 20000;
console.log("Diccionario entero :", diccionario1);
//dicionario con llaves enteras
let diccionario2 = { 1324: "Pedro", 6548: "Juan", 4647: "Maria" };
//lectura
console.log("El usuario de cedula :", 1324 , " se llama ", diccionario2[1324] );
//eliminacion. Usamos delete seguido del dicionario evaluado en la llave a
//eliminar.
delete diccionario2[6548];
console.log("Diccionario entero :", diccionario2);
//recorrido. Usamos for-in. Este itera sobre las llaves del diccionario

for (const llave in diccionario1) {
  console.log("Llave : ", llave);
  console.log("Valor : ", diccionario1[llave]);
  console.log("---------------------------------");
}




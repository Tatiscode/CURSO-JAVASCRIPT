//Un arreglo es una estructura de datos ,esta estructura contiene elementos ,los cuales se encuentran ordenados o indexados
//mediente indices de tipo entero ,los elementos pueden ser de cualquier tipo entero.

//SINTAXIS
//ARREGLO VACIO:Este arreglo es flexible puede contener tantos elementos como se necesiten 
let arregloVacio = [];

//AREGLO NO VACIO:Los elementos se separan por coma (,)
let arreglo = [0 , 1 ,2 , 3 , 500 , 4 , 5 , 6];

//OPERACIONES :
//LECTURA:Para leer un elemento se usa su indice, el primer elemento tiene siempre indice 0
console.log("------------------------")
//Lectura del primer elemento elemento ,se usan corchetes 
console.log ("Elemento de indice 0 :" , arreglo[0])

//PRACTICA ARREGLO
console.log("--------------------------")
console.log ("Elemento de indice 4 :" , arreglo[4])

//Crear un arreglo con los dias de la semana asignando el indice 0 al domingo ,luego mostara todos sus elementos
let arreglo1 = ["domingo" , "lunes" , "martes" , "miercoles" , "jueves" , "viernes" , "sabado" ];
console.log("------------------------------") 
console.log ("Primer dia de la semana :" , arreglo1[0])
console.log ("Segundo dia de la semana :" , arreglo1[1])
console.log ("Tercer dia de la semana :" , arreglo1[2])
console.log ("Cuarto dia de la semana :" , arreglo1[3])
console.log ("Quinto dia de la semana :" , arreglo1[4])
console.log ("Sexto dia de la semana :" , arreglo1[5])
console.log ("Septimo dia de la semana :" , arreglo1[6])
console.log("------------------------------") 

//ESCRITURA ARREGLO
let arregloSalarios = [1000000 , 1800000 , 3000000];
//Cambiamos el salario de indice 1 por 2 millones asignando (2000000)
arregloSalarios[1] = 2000000
console.log ("Elemento Actualizado :" , arregloSalarios[1])
console.log("------------------------------") 
console.log ("Arreglo Actualizado :" , arregloSalarios)
console.log("------------------------------") 

//Uso de .push para agregar elementos a un arreglo 
let arregloNombres181 = [];
//Agregamos un  elemento en cual ira al ultimo indice
arregloNombres181.push("Pedro")
arregloNombres181.push("Daniel")
arregloNombres181.push("Leidy")
arregloNombres181.push("Valentina")
arregloNombres181.push("Zharick")
console.log ("Nombres ADSI 2469181 :" , arregloNombres181)
console.log("------------------------------") 

//Investigar y aplicar .splice al siguientea arreglo para eliminar:
// El elemento de indice 3
// El elemento de indice 4
// El elemento de indice 5
// & Los siguientes 2 elementos a partir del indice 6 ( 7 & 8)
let arregloSlice = [23, 45, 76, 77, 23, 98, 76, 90, 67].splice(3, 4, 5, 7, 8)
console.log ("Despues de eliminar los elementos el areglo Slice es :" , arregloSlice)

//CLASE # 2
//LONGITUD DE UN ARREGLO
//La longitud de un arreglo  es la cantidad de elementos que tiene el arreglo es un numero (CANTIDAD TOTAL EJEMPLO:30=30)
//INDICE : 30=29
//ES FUNCION CUANDO TIENE PARENTESIS CUANDO NO ES UN ATRIBUTO

let arregloLongitud = [200 , 8 , 45 , 9 , 0]
console.log ("La longitud de este arreglo es :" ,arregloLongitud.length)






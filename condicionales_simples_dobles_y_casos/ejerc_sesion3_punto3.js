//3. Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales
//también se debe mostrar al usuario.

console.log("SECCIÓN 3");
console.log('CONDICIONAL-DOBLE-NUMEROS')
let num1 = parseInt( prompt("Ingrese el primer numero: "));
let num2 = parseInt (prompt("Ingrese el segundo numero : "));

if (num1>num2 ){
    console.log ("El numero mayor es :",num1);
    if (num2>num1)
    console.log ("El numero mayor es: " ,num2)
  }else{
    console.log ("Los numeros ingresados son iguales")
  };


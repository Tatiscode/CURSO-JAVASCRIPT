// En una empresa de desarrollo de software se realizan un aumento salarial 
// para el nuevo año según la categoría del empleado. Programe un algoritmo 
// que determine el salario que debe recibir una persona el próximo año según 
// su categoría. Tenga en cuenta lo siguiente:
// ● La categoría 1 tendrá un aumento salarial del 15%.
// ● La categoría 2 tendrá un aumento salarial del 25%.
// ● La categoría 3 tendrá un aumento salarial del 45%

console.log("NUCLEO TEMATICO 4");
console.log('ESTRUCTURA SWITCH-CASE')
let categoria = parseInt( prompt("Ingrese la categoria a la que pertenece (1 , 2 o 3) : "));
let salario =  prompt("Ingrese su salario: ");
switch (categoria) {
    case 1:
        console.log (" Su proximo salario tendra un aumneto del 15 %, para un total de: \n" , salario * 1.15 )
        case 2:
            console.log (" Su proximo salario tendra un aumento del 25 %,para un total de: \n", salario * 1.25  )
            break;
            case 3:
        console.log (" Su proximo salario tendra un aumento del 45 % ,para un total de : \n " , salario * 1.45 )
        break;
    default:
        console.log ("Ingrese valores validos ,por favor ")
        break;
}


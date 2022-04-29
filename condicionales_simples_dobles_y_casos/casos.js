//los casos nos permiten evaluar el valor que puede tomar una varible ,por ejemplo,y tomar diferentes decisiones basados en este valor,los casos son una forma elegante y legible de remplazar un bloque de condiciones .VERSION IF:
console.log('CASOS')
let estrato = parseInt(prompt("Ingrese estrato:")); 
// if (estrato == 1 ){console.log ("Su estrato es 1");
// if (estrato == 2 ){console.log ("Su estrato es 2");
// if (estrato == 3 ){console.log ("Su estrato es 3");
// //declaramos una varible auxiliar                   
// let aux = 60 ;
// if (estrato == 4 ){console.log ("Su estrato es 4");
// if (estrato == 5 ){console.log ("Su estrato es 5");       
// if (estrato == 6 ){console.log ("Su estrato es 6"); 
// version switch-case
switch (estrato) {
    case 1:
        console.log ("Su estrato es 1");
        break;
        case 2:
        console.log ("Su estrato es 2");
        break;
        case 3:
        console.log ("Su estrato es 3");
        break;
        case 4:
        console.log ("Su estrato es 4");
        break;
        case 5:
        console.log ("Su estrato es 5");
        break;
        case 6:
        console.log ("Su estrato es 6");
        break;
         //en caso de que ningun caso anterior se cumpla
    default:
        console.log ("Ingrese un estrato valido")
        break;
}
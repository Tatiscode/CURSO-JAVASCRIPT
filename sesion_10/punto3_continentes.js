// 3. Cree un programa que solicite al usuario el nombre de uno de los cinco continentes, luego, muestre cinco
// países del continente seleccionado por el usuario. Use diccionarios. Use ciclos.

// África, Europa, Asia, América y Oceanía/Australia

let africa = { Angola:'Angola', Argelia: 'Argelia', Benín: 'Benín', Nigeria:'Nigeria' ,Kenia:'Kenia'};
let europa = { Albania:'Albania', Alemania: 'Alemania', Andorra: 'Andorra', Austria:'Austria' ,Bélgica:'Bélgica' };
let asia = {Afganistan:'Afganistan', Armenia: 'Armenia',Azerbaiyán: 'Azerbaiyán', Bangladés:'Bangladés' ,Japon:'Japon' };
let america = {Colombia:'Colombia', Colombia: 'Colombia',Mexico: 'Mexico', Brasil:'Brasil' ,Argentina:'Argentina' };
let oceania = {Australia:'Australia', Fiyi: 'Fiyi',Kiribati: 'Kiribati', Tonga:'Tonga' ,Palaos:'Palaos' };

let continente=prompt("INGRESE UNO DE LOS CONTINENTES(África,Europa,Asia,América,Oceanía): ");
switch (continente) {
    case "africa":
        document.write("ALGUNOS DE LOS PAISES DE AFRICA SON : ");
        for (const llave in africa) {
            document.write("\n" +llave +"," );
        }
        break;
    case "europa":
        document.write("ALGUNOS DE LOS PAISES DE EUROPA SON : ");
        for (const llave in  europa) {
            document.write("\n" +llave +"," );       
        }
        break;
    case "asia":
        document.write("ALGUNOS DE LOS PAISES DE ASIA SON : " );
        for (const llave in  asia) {
            document.write("\n" +llave +"," ); 
        }
        break;
    case "america":
        document.write("ALGUNOS DE LOS PAISES DE AMERICA SON : ");
        for (const llave in  america) {
            document.write("\n" +llave +"," ); 
        }
        break;
    case "oceania":
        document.write("ALGUNOS DE LOS PAISES DE OCEANIA SON : " );
        for (const llave in  oceania) {
            document.write("\n" +llave +"," ); 
        }
        break;
    default:
        document.write("¡INTRODUZCA UN CONTINENTE VALIDO!")
        break;
}






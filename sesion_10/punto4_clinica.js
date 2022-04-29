// 4. Cree un programa que cumpla con los siguientes requerimientos: En una clínica, se requiere un programa
// donde el usuario pueda consultar el día de su cita mediante su documento. La cita debe tener día y fecha. Si el
// usuario consulta, el programa debe mostrarle sus nombres, seguidos del día y hora de su cita. Una vez hecha la
// consulta, el programa le debe mostrar al usuario un mensaje preguntándole si desea cambiar el día ó fecha de su
// cita, de ser así el programa debe realizar tal cambio y mostrarle al usuario que el cambio solicitado ha sido
// exitoso. Use diccionarios.

let consultaCita= parseInt(prompt("Ingrese su numero de documento para consultar el dia de su cita: "))

let usuario={documento:1019984122 ,nombres:'Laura Tatiana',  apellidos:'Barrera Martinez', fecha:'28 de Septiembre', hora:"4:30 PM"}
    
if (consultaCita == usuario["documento"] ) {
    alert("AGENDAMIENTO CITA:\n" + "¡Hola! "+ usuario.nombres +" "+ usuario.apellidos + " su numero de documento es " +usuario.documento +
    " su cita medica es el dia " + usuario.fecha + " a las " + usuario.hora ) 

    let cambio = prompt("¿Desea cambiar la fecha de su cita medica?");
    if ( cambio == "si" || cambio== "SI" ) {
        let cambioFecha = prompt("¿Para que fecha desea reprogramar su cita? ")
        usuario.fecha=cambioFecha
        document.write(usuario.nombres +" "+ usuario.apellidos +" se confirma que su cita medica queda reprograma para el dia " + cambioFecha);
    }
} 


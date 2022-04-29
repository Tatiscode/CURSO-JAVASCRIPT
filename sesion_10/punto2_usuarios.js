// 2. Cree un programa que almacene los documentos y nombres de diez usuarios, donde a cada documento
// corresponda su respectivo nombre. Use diccionarios. Imprima todos los nombres de los usuarios usando ciclos


let diccionarioUsuario={Juan:547812, Tatiana:1019984122, Viviana:24585781, Estiben:1014738393, Sara:1000454, 
Mariana:4500545, Alberto:3000255, Sergio:4855456, Nora:45484212, Liliana:64512145};
document.write("LOS NOMBRES DE LOS USUARIOS SON:")
for (const llave in diccionarioUsuario) {
    document.write("\n" +llave +"," );
}

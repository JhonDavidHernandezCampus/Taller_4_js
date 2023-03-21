




for (var vlrMenu = 0.5;vlrMenu != 0;){
    vlrMenu = Number(prompt(`-------MENU------
        1. Lectura de datos
        2. Crear un objeto
        3. Mostrar Objeto
        4. Crear Array
        5. Mostrar Array
        6. Elimine primer elemento del Aray
        7. Elimine el ultimo elemento del Array
        8. Eliminar cualquier elemento del Aray
        9. Agregar un elemento al comienzo del Array
        10. Agregar elemento al final del Array
        11. Crear Array con Objetos
        12. Iterar Array con Objetos con FOR
        13. Iterar Array con Objetos con ForEach
        14. Iterar Array con Objetos con Map y crear copia
        15. Proceso personal
        0. Salir`));
        
    switch (vlrMenu) {
        case 0:
            
            break;
        case 1:
            alert("dentro")
            break;
        case 2:
            console.log(`Se ha creado un objeto vacio llamado objDatos`)
            var objeto = {}    
            break;
        case 3:
            console.log(`Se muestra el Objeto creado anteriormente`)
            console.log(datos);
            break;
        case 4:
            console.log(`Se ha creado un Array basio con el nombre arrayDatos`);
            var arrayDatos =["hola","2","asimimo","Vamos"];
            break;
        case 5:
            console.log(`Se muestra el Array creado anteriormente`);
            console.log(arrayDatos);
            break;
        case 6:
            console.log(arrayDatos);
            console.log(`Se elimino el primer elento del array (arrayDatos)`);
            arrayDatos.shift()
            console.log(arrayDatos);
            break;
        case 7:
            console.log(`Se elimino el ultimo elento del array (arayDatos)`);
            arrayDatos.pop()
            console.log(arrayDatos);
            break;
        case 8:
            var forma = Number(prompt(` 1. Eliminar por pocicion \n 2. Por conenido (Espesifica el contenido a eliminar)`))
            if (forma == 1) {
                let ele1 = Number(prompt("¿En que posicion se encuentra el elemento que desea eliminar?(Numerico)"));
                arrayDatos.splice(ele1,1);
            }else if(forma == 2){
                let ele2 = prompt("Ingrese el elemento que desea aliminar")
                arrayDatos.splice(arrayDatos.indexOf(ele2),1)   /* me regresa la posiscion del elemento buscado y lo elimina*/
                alert(`se ha eliminado el elemento "${ele2}"`);
            }else {alert("Digite una opcion valida") }
            break;
        case 9:
            console.log(arrayDatos);
            let agre = prompt(`Ingrese el elemento que desea agregar alcomienzo del array "arrayDatos"`);
            arrayDatos.unshift(agre)
            console.log(arrayDatos);
            break;
        case 10:
            console.log(arrayDatos);
            let agre2 = prompt(`Ingrese el elemento que desea agregar al final del array "arrayDatos"`);
            arrayDatos.push(agre2);
            console.log(arrayDatos);
            break;
        case 11:
            alert("Se ha creado un aray con objetos")
            var arrayObejetos =[
                casa ={tipo:"hay 1",unpiso:"hay 5",conGarage:"no hay"},
                animal = {tipo:"cafe",gato:"blanco",loro:"verde"},
                cosa = {tipo:"LG",micro:"microondas",telefono:"Nokia"},
            ]
            console.log(arrayObejetos);
            break;
        case 12:
            for (let i=0; i < arrayObejetos.length; i++) {
                console.log(arrayObejetos[i].tipo)
                
            }
            break;
        case 13:
            
            break;
        case 14:
            
            break;
        case 15:
            
            break;

            default:
                alert("Ingrese una opcion valida");
            break;
        }
}

alert(`Se ha terminado el proceso `)
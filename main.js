




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
            let nom = prompt(`Ingrese su nombre:`);
            let edad = Number(prompt(`Ingrese su edad:`));
            let color = prompt(`Ingrese su color favorito`);
            alert(`Sr.${nom} Usted tiene ${edad} años y su color favorito es ${color}`)
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
            let contin="SI";

            var arrayObejetos =[
                casa ={nombre:"hay 1",tipo:"hay 5",tiempo:"no hay"},
                electrodomestico = {nombre:"cafe",tipo:"blanco",tiempo:"verde"},
                cosa = {nombre:"LG",tipo:"microondas",tiempo:"Nokia"}, 
            ]


            /*  con este for ingresos la cantidad e objetos que quiera a mi array  */
            /* for (let i = 0; contin == "SI"  ;i++) {
                let nom = prompt(`Ingrese el nombre del objeto`);
                let tipo = prompt(`Ingrese el tipo del onjeto`);
                let tiempo = prompt(`Ingrese los años de uso del objeto ${nom}`)
                let obje ={nombre:nom,tipo:tipo,tiempo:tiempo}

                arrayObejetos.unshift(obje);
                contin = prompt(`Desea ingresar mas objetos al array? (si o no)`).toUpperCase()
                console.log(contin); 
            }*/
            console.log(arrayObejetos);
            break;
        case 12:
            console.log(`Mostramos los elementos del Array con objetos`);
            for (let i=0; i < arrayObejetos.length; i++) {
                console.log("Nombre: "+arrayObejetos[i].nombre+" Tipo:"+arrayObejetos[i].tipo+" Años de uso:"+arrayObejetos[i].tiempo)
            }
            break;
        case 13:
            console.log(`Imprimimos la el array con los objetos atravez de un foreach`);
            arrayObejetos.forEach(function(i){
                console.log(i);
            })

            break;
        case 14:/* 
            let nomb = prompt(`Ingrese el nombre del objeto`);
            let tip = prompt(`Ingrese el tipo del onjeto`);
            let tiemp = prompt(`Ingrese los años de uso del objeto ${nomb}`)
            let obje ={nombre:nomb,tipo:tip,tiempo:tiemp} */
            console.log("Recorremos el array con el metodo map");
            let copia = arrayObejetos.map(agregar => `El objeto ${agregar.nombre} de tipo ${agregar.tipo} tiene ${agregar.tiempo} años de uso \n`);
            
            console.log(copia[0]);
            break;
        case 15:
            let num = prompt("Ingrese un numero para retornar su cantidad de digitos")
            function numeroDeDigitos(numero) {
                let contador = 0;
                let numeroAbsoluto = Math.abs(numero);
                while (numeroAbsoluto >= 1) {
                    contador++;
                    numeroAbsoluto /= 10;
                }
                return contador;
            }    
            console.log( numeroDeDigitos(num));


            break;

            default:
                alert("Ingrese una opcion valida");
            break;
        }
}

alert(`Se ha terminado el proceso `)
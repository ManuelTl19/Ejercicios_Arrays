/**
 * 8. Buscar elemento
Escribe una función que reciba un arreglo y un valor, y retorne true si el valor existe
en el arreglo y false si no.
 */

let num=[3,4,5,6,3,5,3,2];

function buscarElemento(arreglo,valor){
    if (arreglo.includes(valor)){
        console.log("El valor si existe");
    }else{
        console.log("El valor no existe");
    }
}

buscarElemento(num,3);



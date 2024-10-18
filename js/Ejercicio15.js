/**
 * Buscar el índice de un elemento
Escribe una función que reciba un arreglo y un valor, y retorne el índice del valor en
el arreglo (o -1 si no existe).
 */

let frutas=["Manzana", "Naranja", "Pera", "Mango", "Uva"];

function Buscar(arreglo,valor){
    console.log(arreglo.indexOf(valor));
}

Buscar(frutas, "Uva");
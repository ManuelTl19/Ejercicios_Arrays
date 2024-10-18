/**
 * 1. Suma de los elementos de un arreglo
Escribe una función que reciba un arreglo de números y retorne la suma de todos
sus elementos.
 */

let numeros=[2,7,8,9,7,5];
let num=0;
suma=0;

function SumaN(arreglo){
    for (num of arreglo){
        suma=suma+num;
    }
    console.log(suma);
}

SumaN(numeros)
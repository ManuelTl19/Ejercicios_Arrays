/**
 * 6. Combina varios arreglos y ordena
Dado varios arreglos de números, combínalos todos en un solo arreglo y ordénalo de
menor a mayor.
 */

let arreglo1=[1,11,21,31,41,51];
let arreglo2=[3,13,23,33,43,53];
let arreglo4=[7,17,27,37,47,57];


function combinaYOrdenar(arreglo1, arreglo2, arreglo3){
    console.log(arreglo1.concat(arreglo2, arreglo3).sort((a, b) => a - b))
}

combinaYOrdenar(arreglo1,arreglo2,arreglo4);
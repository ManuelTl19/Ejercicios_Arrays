/**
 * 6. Concatenar arreglos
Escribe una función que tome dos arreglos y los combine en uno solo.
 */

let arreglo=["Hola", "Mundo!!!.", "Esto", "Es", "Facil"];
let arreglo2=["Este", "Es", "Otro", "Arreglo"];

function concatenar(arreglo, arreglo2){
    let nuevoArreglo=arreglo.concat(arreglo2);
    console.log(nuevoArreglo);
}

concatenar(arreglo, arreglo2);


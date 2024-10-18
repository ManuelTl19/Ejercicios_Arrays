/**
 * 4. Invertir un arreglo
Escribe una función que tome un arreglo y lo devuelva invertido (sin usar reverse()).
 */

let arreglo=["Este", "Arreglo", "Esta", "Derecho"];
let arregloAlreves=[];

function Invertir(arreglo){
    for (let palabra of arreglo){
        arregloAlreves.unshift(palabra);
    }
    console.log(arregloAlreves);
}

Invertir(arreglo);

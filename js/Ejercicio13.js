/**
 * 3. Palabras más largas que "n" letras
Escribe una función que, dado un arreglo de palabras y un número n, devuelva las
palabras que tengan más de nletras.
 */

let arreglo=["Jose", "Manuel", "Tlacuapa", "Balon", "Lapiz", "Manzana"];

function NLetras(arreglo, Npalabras){
    for (let palabra of arreglo){
        if (palabra.length>Npalabras){
            console.log(palabra);
        }
    }
}

NLetras(arreglo, 4);

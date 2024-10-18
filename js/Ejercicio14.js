/**
 * 4. Unir en una cadena
Dado un arreglo de palabras, únelas en una sola cadena separada por comas.
 */

let arreglo=["Este", "Es", "Un", "Texto", "Separado", "Por", "Comas","."];
let texto="";

arreglo.forEach((palabra)=>{
    texto+=palabra+" , ";
})
console.log(texto);
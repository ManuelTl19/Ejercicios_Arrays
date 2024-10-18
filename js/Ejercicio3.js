/**3. Promedio de números
Dado un arreglo de números, crea una función que calcule y retorne el promedio de
esos números.'
*/

let arreglo=[8,10,9,10,10];
let suma=0;
let promedio=0;
let numero=0;
i=0;

function promedioM(numeros){
    for (numero of numeros){
        parseInt(numero);
        suma=suma+numero;
        i++;
    }
    promedio=suma/i;
    console.log(promedio);
}
promedioM(arreglo);

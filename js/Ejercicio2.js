/**
 * 2. Encuentra el mayor número
Escribe una función que encuentre el número más grande en un arreglo de números.*/



let arreglo=[3,42,51,6,7,8];
let numeroMayor=0;

function NumMayor(numeros){
    for(let numero of numeros){
        parseInt(numero);
        if (numero>numeroMayor){
            numeroMayor=numero;
        }
    }
    console.log(numeroMayor);
}

NumMayor(arreglo);



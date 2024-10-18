/**
 * 9. Suma acumulada
Dado un arreglo de números, usa reduce() para retornar la suma acumulada de los
elementos.
 */
let arreglo=[1,2,3,4,5,6];

function sumaAcumulada(numeros) {
    const suma = numeros.reduce((acumulador, numeroActual) => {
      return acumulador + numeroActual;
    }, 0); 
  
    return suma;
  }

console.log(sumaAcumulada(arreglo));
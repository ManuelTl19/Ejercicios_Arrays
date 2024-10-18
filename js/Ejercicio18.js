/**
 * 8. Algunos números son pares
Dado un arreglo de números, usa some() para verificar si al menos uno es par.
 */
let arreglo=[5,3,5,6,8,5,3,5,667,4];
function verificarAlMenosUnPar(numeros) {
    const hayAlMenosUnPar = numeros.some(numero => numero % 2 === 0);
  
    if (hayAlMenosUnPar) {
      console.log("Al menos un número es par.");
    } else {
      console.log("No hay números pares.");
    }
  }
verificarAlMenosUnPar(arreglo);
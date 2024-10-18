/**
 * 7. Todos los números son mayores que "n"
Dado un arreglo de números y un número n, usa every() para verificar si todos los
números son mayores que n.
 */

const numeros = [1, 2, 3, 4, 5];
let n=4;

function verificarMayoresQueN(numeros, n) {
    const todosMayoresQueN = numeros.every(numero => numero > n);
  
    if (todosMayoresQueN) {
      console.log(`Todos los números son mayores que ${n}.`);
    } else {
      console.log(`No todos los números son mayores que ${n}.`);
    }
  }

  verificarMayoresQueN(numeros, n);
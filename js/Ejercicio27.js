/**
 * 7. Contar ocurrencias de un valor
Dado un arreglo de valores, cuenta cuántas veces aparece un valor específico
usando reduce().
 */

const numeros = [1, 2, 3, 4, 3, 5, 3];

const valorBuscado = 3;
const contador = numeros.reduce((acumulador, valorActual) => {
  if (valorActual === valorBuscado) {
    return acumulador + 1;
  }
  return acumulador;
}, 0);

console.log(`El valor ${valorBuscado} aparece ${contador} veces.`);
/**
 * 10. Producto de todos los elementos
Escribe una función que reciba un arreglo de números y use reduce() para calcular
el producto de todos los números.
 */
let arreglo=[1,2,3,4,5];

function productoAcumulado(numeros) {
    const producto = numeros.reduce((acumulador, numeroActual) => {
      return acumulador * numeroActual; // Multiplica el acumulador por el número actual
    }, 1); // El valor inicial del acumulador es 1
  
    return producto; // Retorna el producto total
  }

  console.log(productoAcumulado(arreglo));
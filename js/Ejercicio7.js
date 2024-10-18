/**
 * 7. Eliminar duplicados
Dado un arreglo de números, retorna un nuevo arreglo con los valores únicos (sin
duplicados).
 */

let arreglo = [1,2,6,1,2,5,9,5,1];


let result = arreglo.filter((item,index)=>{
  return arreglo.indexOf(item) === index;
})
console.log(result);



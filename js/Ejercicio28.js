/*8. Transforma un arreglo de objetos
Dado un arreglo de objetos con propiedades {nombre: string, edad: number}, usa
map() para crear un nuevo arreglo que solo contenga los nombres.
*/

let personas = [
    { nombre: 'Jose', edad: 20 },
    { nombre: 'Pablos', edad: 19},
    { nombre: 'Aida', edad: 20 }
  ];

const nombres = personas.map(persona => persona.nombre);

console.log(nombres); 
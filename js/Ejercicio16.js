/**
 * 6. Encontrar un elemento específico
Dado un arreglo de objetos, encuentra el primer objeto que tenga una propiedad
específica usando find().
 */

let personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 35 }
  ];
  
  const personaEncontrada = personas.find(persona => persona.edad > 30);
  
  console.log(personaEncontrada);
/**
 * 10. Combinar objetos de dos arreglos
Dado dos arreglos de objetos, usa map() para combinar los objetos con el mismo
índice en un solo arreglo de objetos.
 */
const personas = [
    { nombre: 'Jose', edad: 30 },
    { nombre: 'Luis', edad: 25 },
    { nombre: 'Angel', edad: 35 }
  ];
  
  const direcciones = [
    { pais: 'España' },
    { pais: 'Argentina' },
    { pais: 'Perú' }
  ];
const combinados = personas.map((persona, index) => {
    return { ...persona, ...direcciones[index] }; // Combina el objeto de persona con el de direcciones en el mismo índice
  });
  
  console.log(combinados);
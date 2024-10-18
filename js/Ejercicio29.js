/**
 * 9. Agrupar por edades
Dado un arreglo de personas con edades, agrúpalas en diferentes grupos según la
década en la que se encuentren (20s, 30s, etc.) usando reduce().
 */
const personas = [
    { nombre: 'Juan', edad: 22 },
    { nombre: 'Ana', edad: 29 },
    { nombre: 'Luis', edad: 35 },
    { nombre: 'Marta', edad: 41 },
    { nombre: 'Pedro', edad: 27 },
    { nombre: 'Sofia', edad: 33 }
  ];

const gruposPorDecada = personas.reduce((acumulador, persona) => {
    const decada = Math.floor(persona.edad / 10) * 10;
    const claveDecada = `${decada}s`;
    if (!acumulador[claveDecada]) {
      acumulador[claveDecada] = [];
    }
    acumulador[claveDecada].push(persona);
    return acumulador; 
  }, {});
  console.log(gruposPorDecada);
const activo = true;

/*let mensaje;
if (!activo) {
  mensaje = 'Activo';
} else {
  mensaje = 'inactivo';
}*/

// Si evaluamos las 2 opciones usar ternario
// const mensaje = (!activo) ? 'Activo' : 'Inactivo';

// No es mala practica pero no es recomendable si solo evaluas una opcion la siguiente solucion
//const mensaje = !activo ? 'Activo' : null;

// si evaluamos solo una opción seria bueno hacerlo de esta forma
 const mensaje = !activo && 'Activo'

console.log(mensaje);
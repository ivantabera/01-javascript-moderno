import { getHeroById } from "./08-exportaciones";

/**
 * promesa con parametros estaticos
 * */
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const p1 = getHeroById(1);
    resolve(p1);
  }, 2000)
});


promesa.then((heroe) => {
  console.log('promesa estatica', heroe);
})

/**
 * promesa con parametros dinamicos
 */
const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const personaje = getHeroById(id);
      if (personaje) {
        resolve(personaje);
      } else {
        reject('No hay información')
      }
    }, 3000)
  })
}

/**
 * Respuesta con datos declarados
 */
/*getHeroByIdAsync(22)
  .then(heroe  => console.log('promesa dinamica', heroe))
  .catch(err => console.warn(err));*/

/**
 * Respuesta con datos implicitos
 */
getHeroByIdAsync(2)
  .then(console.log)
  .catch(console.warn)
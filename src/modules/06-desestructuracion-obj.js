const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
};

const {nombre, clave, edad} = persona;
console.log(nombre, clave, edad);

const retornaPersona = ({nombre, edad, clave, rango='Capitan'}) => {
  // console.log(nombre, edad, clave, rango);
  return {
    nombreClave: nombre,
    anios: edad
  }
}
const {nombreClave, anios} = retornaPersona(persona);

console.log(nombreClave, anios);
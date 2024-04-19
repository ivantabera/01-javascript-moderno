const user1 = (name) => {
  return `Hola, ${name}`;
}

const user2 = (name) => `Hola, ${name}`;

const getUser = () => (
  {
    uuid: 123,
    userName: 'ivantabera'
  }
);

const user = getUser();
console.log(user);

console.log(user1('Vegeta'));
console.log(user2('Goku'));


/**
 * Practica funcion flecha con retorno de objeto implicito
 * */
const getUsuarioActivo = (nombre) => (
  {
    uid: 'ASD123',
    username: nombre,
  }
);

const usuarioActivo = getUsuarioActivo('Fernando Tabera');
console.log(usuarioActivo);
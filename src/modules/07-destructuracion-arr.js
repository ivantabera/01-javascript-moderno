const personajes = ['goku', 'vegeta', 'krillin', 'trunks'];

const [ , , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
  return ['Goku', 1234]
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras);


const destrucArr = ( nombre ) => {
  return [ nombre, () => { console.log( 'Hola mundo' ) }] ;
}

const [param1, setNombre] = destrucArr('Vegeta');
console.log(param1);
setNombre();
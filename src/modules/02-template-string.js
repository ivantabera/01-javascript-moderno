const nombre = 'Ivan';
const apellido = "Tabera";

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return `Hola y bienvenido ${nombre}!`;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);
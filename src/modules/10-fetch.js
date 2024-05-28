/**
 * Este código es un ejemplo de cómo trabajar con promesas y realizar peticiones a APIs externas en JavaScript.
 */

//Se declara una constante apiKey que almacena tu clave de API personal de Giphy.
const apiKey = 'QEQ3yyoc5xlQE1TRD3tTzGOr9FRAwLjn';

//Se declara una constante peticion que inicia una petición de red para obtener un GIF aleatorio de Giphy. Utiliza la función fetch con la URL de la API de Giphy y la clave de API insertada en la URL.
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//Este bloque de código es una serie de promesas encadenadas que manejan la respuesta de una petición a la API de Giphy para obtener un GIF aleatorio y mostrarlo en la página web.
peticion
.then(response => response.json())
.then(({data}) => {
  const {url} = data.images.original;
  const img = document.createElement('img');
  img.src = url;
  document.body.append(img);
})
.catch(console.error);
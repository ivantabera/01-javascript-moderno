const getImage = async() => {

  try{
    const apiKey = 'QEQ3yyoc5xlQE1TRD3tTzGOr9FRAwLjn';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const json = await resp.json();

    const {url} = json.data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (e) {
    console.error(e);
  }

}

getImage()

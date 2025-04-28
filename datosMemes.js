const obtenerMemes = async() =>{  
    const request = await fetch("https://api.imgflip.com/get_memes")  
    const response = await request.json() 
    console.log(response)  

    const memesContiners= document.getElementById("list-memes") /*Contenedor*/
    const memeTemplate = document.getElementById("meme")  /*Tarjeta*/
    
    response.data.memes.slice(0,8).forEach(meme => { /* iterar */
        const newMemeCard = memeTemplate.cloneNode(true) /* */
        const img = newMemeCard.querySelector("img") /* */
        img.src = meme.url /* */
        memesContiners.appendChild(newMemeCard) /* Agregar al contenedor*/
    })
    memeTemplate.remove() /*Remover la caja de memeTemplate*/
    ;
} 

obtenerMemes()

const obtenerGiff = async () => {
    const request = await fetch("https://api.giphy.com/v1/gifs/search?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&q=messi&limit=8");
    const response = await request.json();
    console.log(response.data[0].images.original.url);

    /* Pintar en la UI */
    const memesContiners = document.getElementById("list-gif"); /* Contenedor */
    const memeTemplate = document.getElementById("gif");        /* Tarjeta */

    response.data.forEach(gif => {
        const newMemeCard = memeTemplate.cloneNode(true);
        const img = newMemeCard.querySelector("img");
        img.src = gif.images.original.url;
        memesContiners.appendChild(newMemeCard);
    });

    memeTemplate.remove(); // Remover la plantilla para que no se muestre
};

obtenerGiff();
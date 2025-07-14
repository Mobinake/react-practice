// const getImagenpromesa = () => new Promise(resolve => resolve('https://google.com'));

// getImagenpromesa().then(console.log);

const getImagen = async () => {
    try {
        const apiKey = 'f25abdAWOEKAMtglSH03Gwn9Nok6fP9P';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error('Error al obtener la imagen:', error);
    }
};

getImagen();


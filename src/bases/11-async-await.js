
const getImagenPromesa = () =>
    new Promise(resolve => resolve('htttps://hffjkgksvkksgkgvsl.com'))

//return promesa;
//getImagenPromesa().then( console.log )

const getImagen = async () => {
    //return 'htttps://hffjkgksvkksgkgvsl.com';

    try {

        const apiKey = 'wyoqqiawEvuZKW8MHXWlLpeKsy126Nz4';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        //console.log(data)
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    } catch (error) {
        //manejo del error
        console.error( error )
    }

}
//console.log( getImagen() );
//.then( console.log);
getImagen();


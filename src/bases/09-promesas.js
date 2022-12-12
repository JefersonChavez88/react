import { getHeroeById } from './bases/08-imp-exp';


//const promesa = new Promise( (resolve, reject) => {
//
//    setTimeout( () => {
//        //tarea: 
//        //importen el 
//        const p1 = getHeroeById(2);
//        //console.log(heroe)
//        //console.log('2 segundos despues')
//        resolve( p1 );
//        //reject( p1 );
//        //reject( 'No se pudo encontrar el heroe' );
//    }, 2000 )
//
//});
//
//promesa.then( ( heroe ) => {
//  console.log('heroe', heroe)
//})
//.catch( err => console.warn( err ));

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            //tarea: 
            //importen el 
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject('No se pudo encontrar el heroe');
            }
            //console.log(p1);
            //console.log(heroe)
            //console.log('2 segundos despues')
            //reject( p1 );
        }, 2000)

    });

    //return promesa;

}

getHeroeByIdAsync(1)
    //.then(heroe => console.log('Heroe', heroe))
    .then( console.log )
    // ??? catch ???
    //.catch(err => console.warn(err))
    .catch( console.warn )


const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New YOrk',
        zip: 5532155,
        lat: 14.55665,
        lng: 24.64655
    }
};

//console.table( {persona} );

const persona2 = { ...persona };
persona2.apellido.nombre = 'Peter';

console.log( {persona} );
console.log(persona2) 
// Desestruccturacion
// Asignacion Desestruccturante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

//const { nombre, edad, clave } = persona;

//console.log( nombre );
//console.log( edad );
//console.log( clave );

const useContext = ({ clave, nombre, edad, rango = 'capitan' }) => {
    
    //console.log( nombre, edad, rango );
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1215,
            lng: 266.44
        }

    }
}

const { nombreClave, anios, latlng: { lat, lng } } = useContext( persona );


console.log( nombreClave, anios );
console.log( lat, lng );
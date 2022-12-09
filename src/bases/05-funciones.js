
// Funciones en Js
//const saludar = function( nombre) {
//    return `Hola, ${ nombre }`;
//}

const saludar2 = ( nombre) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre) => `Hola, ${ nombre }`;
const saludar4 = ( ) => 'Hola Mundo';

//console.log( saludar('Goku') )

console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );
console.log( saludar4() );

const getUser = () => ({
        uid:'ABC123',
        username: 'El_Papi123'
    })

const user = getUser();
console.log( user );

//console.log( getUser() );

//tarea 
// 1. transformar a una funcion flecha☻
// 2. tiene que retornar un objeto implicito☻
// 3. pruebas☻

const getUsuarioActivo = ( nombre ) =>({
        uid: 'ABC256',
        username: nombre,  
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo )
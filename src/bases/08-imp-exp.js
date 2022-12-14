//import { heroes } from './data/heroes';
//import { heroes } from './/data/heroes';
//import { heroes } from "./data/heroes";

//import heroes, { owners } from "../data/heroes";
import heroes from "../data/heroes";
//import { heroes, owners } from './data/heroes';

//console.log( owners );

//console.log( heroes );

//const getHeroeById = (id) => {
//    return heroes.find((heroe) => {
//        if (heroe.id === id) {
//            return true;
//        } else {
//            return false;
//        };
//   });
//}

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

//console.log(getHeroeById(2));


//find? filter
export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

//console.log( getHeroeByOwner( 'DC') );
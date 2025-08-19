function creerPerso<T extends Personnage,U extends {classe:string}>(obj1:T,obj2:U){
    return Object.assign(obj1,obj2);
}

interface Personnage {
    nom : string;
    age : number;
}
interface Guerrier {
    classe : "guerrier";
    tribu : string;
}
interface Archer {
    classe : "archer";
    nbFleches : number;
}

const perso:Personnage = {nom : "matthieu",age : 31}
const guerrier:Guerrier = {classe : "guerrier",tribu : "Orc vert"}

const perso2 : Personnage = {nom : "Tya",age:18};
const archer : Archer = {classe:"archer",nbFleches:50}

const g1 = creerPerso(perso,guerrier);
const g2 = creerPerso(perso2,archer);

const a = creerPerso({nom:"Tya",age:31},{classe:"fgdsgf"});
console.log(a);
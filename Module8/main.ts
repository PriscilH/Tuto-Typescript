const noms : Readonly<string[]> = ["tya" , "Toto"];

type Personnage = {
    nom : string;
    age : number;
}

const p1:Readonly<Personnage> = {
    nom :"Tya",
    age : 15
}


// interface Personnage {nom : string;age : number;}
// interface Guerrier extends Personnage {classe : "guerrier";tribu : string;}
// interface Archer extends Personnage  {classe : "archer";nbFleches : number;}

// const g1:Guerrier = {nom : "Milo",age:18,classe:"guerrier",tribu:"Orc vert"};
// const a1:Archer = {nom:"Tya",age:18,classe:"archer",nbFleches:50};

// class Personnages<T extends Personnage>{
//     private liste:Array<T> = [];

//     public ajouterPersonnage(perso:T){
//         this.liste.push(perso);
//     }

//     public afficherPersonnages(){
//         for(let element of this.liste){
//             console.log(element);
//         }
//     }
// }

// const listeGuerrier = new Personnages<Guerrier>();
// listeGuerrier.ajouterPersonnage(g1);
// console.log("Liste de guerriers :");
// listeGuerrier.afficherPersonnages();
// const listeArcher = new Personnages<Archer>();
// listeArcher.ajouterPersonnage(a1);
// console.log("Liste d'archers :");
// listeArcher.afficherPersonnages();


// function creerPerso() : Personnage {
//     let p1:Partial<Personnage> = {
//         nom : "Milo",
//     }
//     p1.age = 15;
//     return p1 as Personnage;
// }

// console.log(p1);
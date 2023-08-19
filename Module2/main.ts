interface Personnage {
    nom : string;
}

interface Humain extends Personnage  {
    age : number;
}

interface Monstre extends Personnage {
    tribu : string;
}

type Perso= Humain | Monstre;

const p1: Humain = {
    nom : "Mounya",
    age : 6
}

const p2 : Monstre = {
    nom : "Albo",
    tribu : "Orc vert"
}

function afficherPersonnage(perso : Perso){
    console.log("Nom : " + perso.nom);
    if("age" in perso){
      console.log("Age : " + perso.age);
    }
    if ("tribu" in perso){
        console.log("Tribu : " + perso.tribu);
    }
}

afficherPersonnage(p1);
afficherPersonnage(p2);
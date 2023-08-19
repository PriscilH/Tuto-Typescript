interface Personnage {
    nom : string;
    race : string;
}

interface Humain extends Personnage  {
    age : number;
    race : "Humain";
}

interface Monstre extends Personnage {
    tribu : string;
    race : "Monstre";
}

type Perso= Humain | Monstre;

const p1: Humain = {
    nom : "Mounya",
    race : "Humain",
    age : 6
}

const p2 : Monstre = {
    nom : "Albo",
    race : "Monstre",
    tribu : "Orc vert"
}

function afficherPersonnage(perso : Perso){
    console.log("Nom : " + perso.nom);
    if(perso.race==="Humain"){
      console.log("Age : " + perso.age);
    }
    if (perso.race==="Monstre"){
        console.log("Tribu : " + perso.tribu);
    }
}

afficherPersonnage(p1);
afficherPersonnage(p2);


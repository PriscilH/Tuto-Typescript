interface Adresse {
    ligne : string;
    ville : string;
    cp : number;
}

type Personne = [string,number,boolean];
let perso1:Personne = ["Mounya",6,true];
let perso2:Personne = ["Tyo",18,true];

const prenom = "Vador";
const age = 32;
const genre = true;
const sports = ["foot","basket"]
const adresse:Adresse  = {
    ligne : "rue des étoiles",
    ville : "Mars",
    cp : 31000
}

function afficherAdresse (in_adr:Adresse){
    console.log(in_adr.ligne);
    console.log(in_adr.cp + " " + in_adr.ville);
}

afficherAdresse(adresse);
afficherAdresse({ligne:"rue des plantes",ville:"Nantes",cp:44000});

interface Point {
    x:number;
    y:number;
}
const tab: Point[] = [
    {x:1,y:2},
    {x:2,y:3},
    {x:1,y:3}
]
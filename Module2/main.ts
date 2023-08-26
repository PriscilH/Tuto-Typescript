interface Personnage  {
    nom : string;
    age : number;
}

interface Humain  {
    classe : string;
}

interface Homme extends Personnage, Humain{
    sports : string[],
};

const test : Humain = {
    classe : "voleur"
}

const math:Homme ={
    nom : "Math",
    age : 31,
    classe : "Guerrier",
    sports : ["foot", "rugby"]
}
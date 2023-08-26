enum Classe {GUERRIER = "Guerrier", VOLEUR="Voleur", ARCHER="Archer"};

interface Personnage {
    nom : string;
}

interface Guerrier extends Personnage {
    classe : Classe.GUERRIER;
}

interface Voleur extends Personnage {
    classe : Classe.VOLEUR
}
const p1:Personnage & Guerrier = {
    nom : "Math",
    classe : Classe.GUERRIER

}
console.log(Classe.GUERRIER);
console.log(p1);


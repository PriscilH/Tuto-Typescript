var p1 = {
    nom: "Mounya",
    age: 6
};
var p2 = {
    nom: "Albo",
    tribu: "Orc vert"
};
function afficherPersonnage(perso) {
    console.log("Nom : " + perso.nom);
    if ("age" in perso) {
        console.log("Age : " + perso.age);
    }
    if ("tribu" in perso) {
        console.log("Tribu : " + perso.tribu);
    }
}
afficherPersonnage(p1);
afficherPersonnage(p2);

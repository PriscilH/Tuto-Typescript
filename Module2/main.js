var p1 = {
    nom: "Mounya",
    race: "Humain",
    age: 6
};
var p2 = {
    nom: "Albo",
    race: "Monstre",
    tribu: "Orc vert"
};
function afficherPersonnage(perso) {
    console.log("Nom : " + perso.nom);
    if (perso.race === "Humain") {
        console.log("Age : " + perso.age);
    }
    if (perso.race === "Monstre") {
        console.log("Tribu : " + perso.tribu);
    }
}
afficherPersonnage(p1);
afficherPersonnage(p2);

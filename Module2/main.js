var perso1 = ["Mounya", 6, true];
var perso2 = ["Tyo", 18, true];
var prenom = "Vador";
var age = 32;
var genre = true;
var sports = ["foot", "basket"];
var adresse = {
    ligne: "rue des étoiles",
    ville: "Mars",
    cp: 31000
};
function afficherAdresse(in_adr) {
    console.log(in_adr.ligne);
    console.log(in_adr.cp + " " + in_adr.ville);
}
afficherAdresse(adresse);
afficherAdresse({ ligne: "rue des plantes", ville: "Nantes", cp: 44000 });
var tab = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 1, y: 3 }
];

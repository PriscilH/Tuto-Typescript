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
function format(input) {
    if (typeof input === "string") {
        return "Text: ".concat(input);
    }
    else {
        return "Number: ".concat(input.toString());
    }
}
var formattedText = format("Hello");
var formattedNumber = format(42);
console.log(formattedText); // Text: Hello
console.log(formattedNumber); // Number: 42

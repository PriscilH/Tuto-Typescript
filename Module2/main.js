var prenom = "Vador";
var age = 32;
var genre = true;
var sports = ["foot", "basket"];
var adresse = {
    ligne: "rue des étoiles",
    ville: "Mars",
    cp: 31000
};
var afficherPersonne = function (in_prenom, in_age, in_genre, in_sports, in_adresse) {
    console.log("Prenom : " + in_prenom);
    console.log("Age : " + in_age);
    console.log("Genre : " + (in_genre ? "Homme" : "Femme"));
    for (var _i = 0, in_sports_1 = in_sports; _i < in_sports_1.length; _i++) {
        var sport = in_sports_1[_i];
        console.log(sport);
    }
    console.log("Adresse : ");
    console.log(in_adresse.ligne);
    console.log(in_adresse.cp + " " + in_adresse.ville);
};
afficherPersonne(prenom, age, genre, sports, adresse);
var anniv = function (in_age) {
    return in_age + 1;
};
function afficherResult(result) {
    console.log("Le résultat est " + result);
}
function afficherAge(age) {
    console.log("L'age est " + age);
}
function ajout(nb1, nb2, callback) {
    var res = nb1 + nb2;
    callback(res);
}
ajout(18, 10, afficherAge);

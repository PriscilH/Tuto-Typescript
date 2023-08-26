var Classe;
(function (Classe) {
    Classe["GUERRIER"] = "Guerrier";
    Classe["VOLEUR"] = "Voleur";
    Classe["ARCHER"] = "Archer";
})(Classe || (Classe = {}));
;
var p1 = {
    nom: "Math",
    classe: Classe.GUERRIER
};
console.log(Classe.GUERRIER);
console.log(p1);

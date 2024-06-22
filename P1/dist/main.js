"use strict";
const dollar = {
    nom: "Dollar",
    code: "Dol",
    symbole: "$",
    taux: 1
};
const euro = {
    nom: "Euro",
    code: "Eur",
    symbole: "€",
    taux: 0.93
};
const livre = {
    nom: "Livre",
    code: "Liv",
    symbole: "£",
    taux: 0.79
};
const yuan = {
    nom: "Yuan",
    code: "Yua",
    symbole: "¥",
    taux: 7.27
};
const devises = [dollar, euro, livre, yuan];
const deviseSelect = document.querySelector("#devise-initiale");
deviseSelect.innerHTML = listOption(devises);
let deviseSelectValeur = deviseSelect.value; // code de la devise
deviseSelect.addEventListener("change", () => {
    deviseSelectValeur = deviseSelect.value;
    affichResultat();
});
const deviseFinSelect = document.querySelector("#devise-finale");
deviseFinSelect.innerHTML = listOption(devises);
let deviseFinValeur = deviseFinSelect.value; // code de la devise
deviseFinSelect.addEventListener("change", () => {
    deviseFinValeur = deviseFinSelect.value;
    affichResultat();
});
let montant = 0;
const montantInput = document.querySelector("#montant");
montantInput.addEventListener('keyup', () => {
    montant = +montantInput.value;
    affichResultat();
});
let divResultat = document.querySelector("#resultats");
function affichResultat() {
    divResultat.innerHTML = "Résultat : " + calculResultat(montant, deviseSelectValeur, deviseFinValeur);
}
function calculResultat(in_montant, in_deviseSelectValeur, in_deviseFinValeur) {
    let deviseSelectObjet = getDevise(in_deviseSelectValeur, devises);
    let deviseFinObjet = getDevise(in_deviseFinValeur, devises);
    // let deviseSelect:Devise;
    // if(deviseSelectObjet) deviseSelect = deviseSelectObjet as Devise;
    // else throw {message:"La devise initiale n'est pas correcte"};
    // let deviseFinSelect:Devise;
    // if(deviseFinObjet) deviseFinSelect = deviseFinObjet as Devise;
    // else throw {message:"La devise initiale n'est pas correcte"};
    return (montant * deviseSelectObjet.taux) / deviseFinObjet.taux;
}
function getDevise(codeDevise, in_devises) {
    let d = in_devises[0];
    for (let devise of in_devises) {
        if (codeDevise === devise.code) {
            d = devise;
        }
    }
    return d;
}
function listOption(lesdevises) {
    let listDevisTxt = "";
    for (let devise of lesdevises) {
        listDevisTxt += `<option value="${devise.code}">${devise.nom} - (${devise.symbole})</option>`;
    }
    return listDevisTxt;
}
//# sourceMappingURL=main.js.map
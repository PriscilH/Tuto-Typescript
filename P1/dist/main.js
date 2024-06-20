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
console.log(devises);
const deviseSelect = document.querySelector("#devise-initiale");
deviseSelect.innerHTML = listOption(devises);
const deviseFinSelect = document.querySelector("#devise-finale");
deviseFinSelect.innerHTML = listOption(devises);
function listOption(lesdevises) {
    let listDevisTxt = "";
    for (let devise of lesdevises) {
        listDevisTxt += `<option value="${devise.code}">${devise.nom} - (${devise.symbole})</option>`;
    }
    return listDevisTxt;
}
//# sourceMappingURL=main.js.map
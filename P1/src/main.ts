type Devise = {
    nom:string;
    code:string;
    symbole:string;
    taux:number;
}

const dollar:Devise = {
    nom: "Dollar",
    code: "Dol",
    symbole: "$",
    taux: 1
}

const euro:Devise = {
    nom: "Euro",
    code: "Eur",
    symbole: "€",
    taux: 0.93
}

const livre:Devise = {
    nom: "Livre",
    code: "Liv",
    symbole: "£",
    taux: 0.79
}

const yuan:Devise = {
    nom: "Yuan",
    code: "Yua",
    symbole: "¥",
    taux: 7.27
}

const devises:Devise[] = [dollar,euro,livre,yuan];
console.log(devises);

const deviseSelect = document.querySelector("#devise-initiale")! as HTMLSelectElement;
deviseSelect.innerHTML = listOption(devises);

const deviseFinSelect = document.querySelector("#devise-finale")! as HTMLSelectElement;
deviseFinSelect.innerHTML = listOption(devises);
function listOption(lesdevises:Devise[]) : string {
    let listDevisTxt = "";
    for(let devise of lesdevises){
        listDevisTxt += `<option value="${devise.code}">${devise.nom} - (${devise.symbole})</option>`;
    }
    return listDevisTxt;
}
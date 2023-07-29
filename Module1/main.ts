const inputNb1 = document.querySelector("#nb1") as HTMLInputElement;
const inputNb2 = document.querySelector("#nb2") as HTMLInputElement;
const divResultat = document.querySelector(".resultat") as HTMLDivElement;
const inputCalcul = document.querySelector("#calcul") as HTMLInputElement;

inputCalcul.addEventListener("click", () => {
    // let resultat = addition(parseInt(inputNb1.value),parseInt(inputNb2.value));
    let resultat = addition(+inputNb1.value,+inputNb2.value); // utilisation avec le + plus récente
    // let resultat = addition(inputNb1.value,inputNb2.value);
    divResultat.innerHTML = "" + resultat; // ou bien resultat.toString();
});

// Dans la fonction on indique le type number pour nb1 et nb2 pour qu'il soit considérés
// comme des nombres et non des strings ou any. Cette fonction ne pourras plus être 
// utilisée pour la concaténation
function addition(nb1:number,nb2:number){
    // if (typeof(nb1) === "number" && typeof(nb2) === "number") {
        return nb1 + nb2;
    // } else {
    //     return `Les valeurs ne sont pas de type "Number"`;
    // } 
}
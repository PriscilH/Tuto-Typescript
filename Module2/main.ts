const prenom = "Vador";
const age = 32;
const genre = true;
const sports = ["foot","basket"]
const adresse  = {
    ligne : "rue des étoiles",
    ville : "Mars",
    cp : 31000
}

const afficherPersonne = (
    in_prenom:string, 
    in_age:number, 
    in_genre:boolean, 
    in_sports:string[], 
    in_adresse:{
        ligne:string;
        ville:string;
        cp:number
    }
    ) => {
   console.log("Prenom : " + in_prenom); 
   console.log("Age : " + in_age); 
   console.log("Genre : " + (in_genre ? "Homme" : "Femme")); 
   for (const sport of in_sports){
    console.log(sport)
   }
   console.log("Adresse : " ); 
   console.log(in_adresse.ligne); 
   console.log(in_adresse.cp + " "+ in_adresse.ville);
}

afficherPersonne(prenom,age,genre,sports,adresse);

const anniv = (in_age:number) : number => {
    return in_age + 1;
}

function afficherResult(result:number) : void{
    console.log("Le résultat est " + result);
}
function afficherAge(age:number) : void{
    console.log("L'age est " + age);
}

function ajout(nb1:number, nb2:number, callback : (n : number) => void){
    let res = nb1 + nb2;
    callback(res);
}

ajout(18,10, afficherAge);
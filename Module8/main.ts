type Humain = {nom:string,age:number};
type Orc = {nom : string, tribu:string};

let h1:Humain = {nom:"Tya",age:18};
let o1:Orc = {nom:"Gael",tribu:"Orc vert"};

let g1 = creerGuerrier(h1);
let g2 = creerGuerrier(o1);

let g3 = creerGuerrier({nom:"toto",sexe:true});

function creerGuerrier<Type extends{nom:string}>(j:Type){
    return {
        ...j,
        classe:"Guerrier"
    }
}
type Pays = {
  nom: string;
  drapeau: string;
};

let listePays: Pays[] = [];
let randomPays: Pays;

type CountryAPI = {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: { official: string; common: string };
    };
  };
  flags: {
    png: string;
    svg: string;
  };
  translations: {
    [key: string]: { official: string; common: string };
  };
  [props: string]: any;
};

// Récupération des données depuis l'API
fetch("https://restcountries.com/v3.1/all?fields=name,flags,translations")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((datas: CountryAPI[]) => {
    startApplication(datas);
  })
  .catch(error => {
    console.error("Erreur lors de la requête :", error);
    document.querySelector("h1")!.textContent = "Les informations récupérées ne sont pas disponibles";
  });

// Préparation de la liste des pays
function startApplication(datas: CountryAPI[]) {
  for (let unPays of datas) {
    const nomPays = unPays.translations?.fra?.common || unPays.name.common;

    const pays: Pays = {
      nom: nomPays,
      drapeau: unPays.flags.png,
    };

    listePays.push(pays);
  }

  afficherQuiz();
}

// Affiche le quiz (drapeau + boutons)
function afficherQuiz() {
  randomPays = getRandomPays(listePays);

  // Affiche le drapeau
  document.querySelector("#drapeau")!.innerHTML = `
    <img src="${randomPays.drapeau}" width="250px" class="border border-dark" alt="${randomPays.nom}"/>
  `;

  // Préparer les réponses
  const bonneReponse = randomPays.nom;
  let lesReponses: string[] = [
    bonneReponse,
    getRandomPays(listePays).nom,
    getRandomPays(listePays).nom,
    getRandomPays(listePays).nom,
  ];

  lesReponses = melangeTableau(lesReponses);

  // Affiche les boutons de réponse
  const boutonsDiv = document.querySelector("#boutons")!;
  boutonsDiv.innerHTML = genererBoutonsReponse(lesReponses);

  // Attacher les événements click aux boutons
  boutonsDiv.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => verificationReponse(btn.textContent!));
  });
}

// Mélange un tableau (Fisher-Yates)
function melangeTableau(tab: any[]) {
  const randomTab = [...tab];
  for (let i = randomTab.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomTab[i], randomTab[j]] = [randomTab[j], randomTab[i]];
  }
  return randomTab;
}

// Génère le HTML des boutons
function genererBoutonsReponse(tab: string[]): string {
  return tab.map(nom => `<button class="btn btn-primary me-1 mt-1">${nom}</button>`).join('');
}

// Vérifie la réponse et affiche le résultat
function verificationReponse(reponse: string): void {
  const divResultat = document.querySelector("#resultats")! as HTMLDivElement;

  if (reponse === randomPays.nom) {
    divResultat.innerHTML = `<div class="alert alert-success">${reponse} est la bonne réponse</div>`;
  } else {
    divResultat.innerHTML = `<div class="alert alert-danger">${reponse} est une mauvaise réponse</div>`;
  }

  // Ajouter le bouton "Changer de pays" 
  const boutonChanger = document.createElement("button");
  boutonChanger.className = "btn btn-warning mt-2";
  boutonChanger.textContent = "Changer de pays";
  boutonChanger.addEventListener("click", () => {
    afficherQuiz();        
    divResultat.innerHTML = ""; 
  });

  divResultat.appendChild(boutonChanger);

  // Générer un nouveau quiz automatiquement après 2,5s (optionnel)
  setTimeout(() => {
    afficherQuiz();
    divResultat.innerHTML = "";
  }, 2500);
}


// Retourne un pays aléatoire
function getRandomPays(listePays: Pays[]): Pays {
  const random = Math.floor(Math.random() * listePays.length);
  return listePays[random];
}

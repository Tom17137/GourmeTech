document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".night-mode");

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // change l’icône selon le mode
        if (document.body.classList.contains("dark-mode")) {
            toggle.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            toggle.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    });

    // sauvegarde du choix utilisateur
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggle.textContent = "☀️";
    }
});


let newRec = JSON.parse(localStorage.getItem ("favoris")) || [];

function save() {
    localStorage.setItem("favoris",JSON.stringify(newRec));
}





// ----------- API -------------

// --- Sélection des éléments HTML ---
const input = document.querySelector('.search-section input');
const button = document.querySelector('.search-section button');
const cartesContainer = document.querySelector('.cartes');

// --- Ta clé API ---
const API_KEY = 'd9f95a71e4bd4bf791afc37be322ca97';

// --- Fonction principale ---
async function chercherRecettes() {
  const query = input.value.trim();
  if (!query) {
    alert("Veuillez entrer un mot-clé !");
    return;
  }

  // Récupération des filtres cochés
  const categorie = document.querySelector('input[name="Catégorie"]:checked')?.parentElement.textContent.trim();
  const temps = document.querySelector('input[name="Temps"]:checked')?.parentElement.textContent.trim();
  const difficulte = document.querySelector('input[name="Difficulté"]:checked')?.parentElement.textContent.trim();

  console.log("Filtres :", { categorie, temps, difficulte });

  // Construction de l’URL de l’API
  let url = `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(query)}&number=12&addRecipeInformation=true&apiKey=${API_KEY}`;

  // 🎯 Adaptation pour la "catégorie" (Spoonacular → type de plat)
  if (categorie) {
    const typeMap = {
      'Entrée': 'starter',
      'Plat': 'main course',
      'Dessert': 'dessert'
    };
    const apiType = typeMap[categorie];
    if (apiType) url += `&type=${encodeURIComponent(apiType)}`;
  }

  try {
    cartesContainer.innerHTML = "<p>Chargement...</p>";

    const response = await fetch(url);
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      cartesContainer.innerHTML = "<p>Aucune recette trouvée 😢</p>";
      return;
    }

    // ⏱️ Filtrage local pour le temps de préparation
    let recettesFiltrees = data.results;
    if (temps) {
      recettesFiltrees = recettesFiltrees.filter(r => {
        const t = r.readyInMinutes || 0;
        if (temps.includes('Rapide')) return t < 30;
        if (temps.includes('Moyen')) return t >= 30 && t <= 60;
        if (temps.includes('Long')) return t > 60;
        return true;
      });
    }

    // 💪 Filtrage local pour la difficulté (estimée selon le temps)
    if (difficulte) {
      recettesFiltrees = recettesFiltrees.filter(r => {
        const t = r.readyInMinutes || 0;
        if (difficulte.includes('Facile')) return t < 30;
        if (difficulte.includes('Moyen')) return t >= 30 && t <= 60;
        if (difficulte.includes('Difficile')) return t > 60;
        return true;
      });
    }

    // Affichage final
    afficherCartes(recettesFiltrees);
  } catch (error) {
    console.error("Erreur API :", error);
    cartesContainer.innerHTML = "<p>Erreur lors du chargement des recettes.</p>";
  }

  input.value = "";
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
  radio.checked = false;
});
}

// --- Fonction pour générer les cartes ---
function afficherCartes(recettes) {
  cartesContainer.innerHTML = "";

    if (recettes.length === 0) {
    cartesContainer.innerHTML = "<p>Aucune recette ne correspond à ces filtres 😕</p>";
    return;
    }

    recettes.forEach(recette => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
        <div class="fav-btn">♡</div>
        <img src="${recette.image}" alt="${recette.title}">
        <div class="card-content">
            <h3>${recette.title}</h3>
            <div class="tags">
            <span class="tag orange">${recette.dishTypes?.[0] || 'Plat'}</span>
            <span class="tag green">${recette.readyInMinutes || '?'} min</span>
            <span class="tag blue">${recette.veryPopular ? 'Populaire' : 'Standard'}</span>
            </div>
            <button onclick="window.open('${recette.sourceUrl}', '_blank')">Voir la recette</button>
        </div>
        `;

        cartesContainer.appendChild(card);

        const favButtons = card.querySelector(".fav-btn");

        favButtons.addEventListener("click", function() {
        // Inverse l'état du favori
            favButtons.classList.toggle("active");
                // Change le symbole du cœur
            if (favButtons.classList.contains("active")) {
                favButtons.textContent = "❤️"; // cœur plein
                ajouter(recette);
            } else {
                favButtons.textContent = "♡"; // cœur vide
            }
        });
  

    })
};


async function ajouter(recette) {

    const res = await fetch(`https://api.spoonacular.com/recipes/${recette.id}/information?apiKey=${API_KEY}`);
    const recetteResum = await res.json();

    newRec.push ({
        title: recetteResum.title,
        category: recetteResum.dishTypes?.[0] || 'Plat',
        time: recetteResum.readyInMinutes || '?',
        difficult: recetteResum.veryPopular ? 'Populaire' : 'Standard',
        ingredie: recetteResum.extendedIngredients
            ? recetteResum.extendedIngredients.map(ing => ing.original)
            : [],
        prepara: recetteResum.analyzedInstructions && recetteResum.analyzedInstructions.length > 0
            ? recetteResum.analyzedInstructions[0].steps.map(step => step.step)
            : (recetteResum.instructions ? [recetteResum.instructions] : []),
        pic: recetteResum.image        
    })
    console.log(newRec);

    save ();
    
}

// --- Lancement de la recherche avec le bouton ---
button.addEventListener('click', chercherRecettes);

// --- Lancement de la recherche avec la touche "Entrée" ---
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') chercherRecettes();
});
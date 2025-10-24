let newRec = JSON.parse(localStorage.getItem("favoris")) || [];




let affTempl = document.getElementById("templateAffichage");


let affiche = document.getElementById("affiche");
affiche.style.display = "none";


function render() {
  const ajoutRec = document.getElementById("ajoutRec");
  const template = document.getElementById("template");

  // 🟢 Recharger les données à jour depuis le localStorage
  newRec = JSON.parse(localStorage.getItem("favoris")) || [];

  // 🧹 Vider le conteneur avant de le remplir
  ajoutRec.innerHTML = "";

  // 🧩 Recréer chaque carte recette
  newRec.forEach((recette, index) => {
    let clone = template.content.cloneNode(true);

    clone.querySelector(".image").src = recette.pic;
    clone.querySelector(".image").alt = recette.title;
    clone.querySelector("h3").textContent = recette.title;
    clone.querySelector(".tag.orange").textContent = recette.category;
    clone.querySelector(".tag.green").textContent = recette.time;
    clone.querySelector(".tag.blue").textContent = recette.difficult;

    // 👁 Bouton "voir"
    const boutVoir = clone.querySelector(".voir");
    boutVoir.addEventListener("click", () => afficher(index));

       // Bouton "Supprimer"
        const boutSuppr = clone.querySelector(".del-btn");
        boutSuppr.addEventListener("click", () => {
            // Supprimer la recette du tableau
            newRec.splice(index, 1);
            // Mettre à jour localStorage
            localStorage.setItem("favoris", JSON.stringify(newRec));
            // Re-render uniquement avec les cartes restantes
            ajoutRec.innerHTML = "";
            render();
        });

        ajoutRec.appendChild(clone);
    });
}




function afficher(index) {

    affiche.innerHTML = "";

    let affDer = newRec[index];

    let affClone = affTempl.content.cloneNode(true);

    affClone.querySelector(".h3").textContent = affDer.title;
    affClone.querySelector(".tag.orange").textContent = affDer.category;
    affClone.querySelector(".tag.green").textContent = affDer.time;
    affClone.querySelector(".tag.blue").textContent = affDer.difficult; 
    let affCloneImg = affClone.querySelector(".image");
    affCloneImg.src = affDer.pic;
    affCloneImg.alt = affDer.title;
    let affIngr = affClone.querySelector(".tIngredients");
    affIngr.value = affDer.ingredie; 
    affIngr.contentEditable = true
     let motIngr
    if (Array.isArray(affDer.ingredie)) {
        motIngr = affDer.ingredie;
    } else if (typeof affDer.ingredie === "string") {
        motIngr = affDer.ingredie.split(";").map(m => m.trim()).filter(m => m !== "");
    } else {
        motIngr = [];
    }
    
    let ul = document.createElement("ul");

    motIngr.forEach(mot => {
        let li = document.createElement("li");
        li.textContent = mot;        
        ul.appendChild(li);
        
    });
    affIngr.appendChild(ul);
    let affClonePrepa = affClone.querySelector(".tPrepa");
    affClonePrepa.textContent = affDer.prepara;
    affClonePrepa.contentEditable = true
    let boutAffClone = affClone.querySelector(".boutonAffiche");
    boutAffClone.textContent;

    affiche.appendChild(affClone);
    
    affiche.style.display = "block";

    boutAffClone.addEventListener("click", function() {
        affiche.style.display = "none";
    }) 
}


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




 // Sélectionner tous les boutons de suppression
let delButtons = document.querySelectorAll(".del-btn");

delButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
alert("bouton")
    // 1️⃣ Supprimer la recette du tableau `newRec`
    newRec.splice(index, 1);

    // 2️⃣ Mettre à jour le localStorage
    localStorage.setItem("favoris", JSON.stringify(newRec));

    // 3️⃣ Vider le conteneur avant de re-render
    document.getElementById("ajoutRec").innerHTML = "";

    // 4️⃣ Recharger l'affichage mis à jour
    


  });
});
 render()
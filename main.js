/* let newRec = JSON.parse(localStorage.getItem("favoris")) || []; */
let newRec = [
    {
        "title": "Recette",
        "category": "Plat",
        "time": "Moyen",
        "difficult": "Facile",
        "ingredie": "3 oeufs; 2kg de farine; 3 pommes",
        "prepara": "Tu fais comme tu veux",
        "pic": "https://s2.qwant.com/thumbr/474x327/7/d/a18e793360ac07f06b0dfd3dffb3247e3760c200f5632d2fca49c20bad48c2/OIP.MUmFsp94BUm5TVhg5SjOwQHaFH.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%2Fid%2FOIP.MUmFsp94BUm5TVhg5SjOwQHaFH%3Fcb%3D12%26pid%3DApi&q=0&b=1&p=0&a=0"
    },
    {
        "title": "Recette nouvelle",
        "category": "Entrée",
        "time": "Moyen",
        "difficult": "Facile",
        "ingredie": "3 pommes; 2kg de farine; levure",
        "prepara": "Fait comme tu veux",
        "pic": "https://s1.qwant.com/thumbr/474x314/9/f/2c54336210e1a53368fb1067fbedfa5b06865bd8ab44f5f14c1dd55b32dfb9/OIP.6942xR5Hvo2ZPDeHff85DwHaE6.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%2Fid%2FOIP.6942xR5Hvo2ZPDeHff85DwHaE6%3Fcb%3D12%26pid%3DApi&q=0&b=1&p=0&a=0"
    },
    {
        "title": "Nouvelle Recette",
        "category": "Plat",
        "time": "Rapide",
        "difficult": "Moyen",
        "ingredie": "3 oeufs; 2 kg de farine; 3 pommes",
        "prepara": "Préparation",
        "pic": "https://assets.afcdn.com/recipe/20160401/465_w1024h576c1cx1588cy2398.jpg"
    },
    {
        "title": "Nouveau test recette",
        "category": "Entrée",
        "time": "Moyen",
        "difficult": "Facile",
        "ingredie": "3 oeufs; 2 kg de farine; 3 pommes",
        "prepara": "Préparetion",
        "pic": "https://s2.qwant.com/thumbr/474x266/f/f/c7783fce01a84635e1d53e1ede2694da91cba5aae7df7e24169ed31340dcff/OIP.Nrb7sCecT79CMPXc1o-bpwHaEK.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%2Fid%2FOIP.Nrb7sCecT79CMPXc1o-bpwHaEK%3Fcb%3D12%26pid%3DApi&q=0&b=1&p=0&a=0"
    },
    {
        "title": "Recette",
        "category": "Plat",
        "time": "Moyen",
        "difficult": "Facile",
        "ingredie": "3 oeufs; 2kg de farine; 3 pommes;",
        "prepara": "kefjkefjkejfekf",
        "pic": "https://backend.panzani.fr/app/uploads/2023/10/majc49-1-scaled.jpg"
    },
    {
        "title": "Recette Test !!",
        "category": "Plat",
        "time": "Moyen",
        "difficult": "Facile",
        "ingredie": "3 oeaufs; 3kg de farine; 3 pommes; 3 cuillères de crème fraîche;",
        "prepara": "Préparez en fonction de vos habitude !!",
        "pic": "https://s1.qwant.com/thumbr/474x417/1/0/f6926c89e422149171af7a42a15b2ce556ea66da4473d78246eb6a85de2413/OIP.xtJI3Ca2XyD69PsbOmEkFgHaGh.jpg?u=https%3A%2F%2Fthvnext.bing.com%2Fth%2Fid%2FOIP.xtJI3Ca2XyD69PsbOmEkFgHaGh%3Fcb%3D12%26pid%3DApi%26ucfimg%3D1&q=0&b=1&p=0&a=0"
    },
    {
        "title": "Recette",
        "category": "Plat",
        "time": "Moyen",
        "difficult": "Facile",
        "ingredie": "3 oeufs; 2kg de farine; 3 pommes;",
        "prepara": "kefjkefjkejfekf",
        "pic": "https://backend.panzani.fr/app/uploads/2023/10/majc49-1-scaled.jpg"
    },
    {
        "title": "Recette Test !!",
        "category": "Plat",
        "time": "Moyen",
        "difficult": "Facile",
        "ingredie": "3 oeaufs; 3kg de farine; 3 pommes; 3 cuillères de crème fraîche;",
        "prepara": "Préparez en fonction de vos habitude !!",
        "pic": "https://s1.qwant.com/thumbr/474x417/1/0/f6926c89e422149171af7a42a15b2ce556ea66da4473d78246eb6a85de2413/OIP.xtJI3Ca2XyD69PsbOmEkFgHaGh.jpg?u=https%3A%2F%2Fthvnext.bing.com%2Fth%2Fid%2FOIP.xtJI3Ca2XyD69PsbOmEkFgHaGh%3Fcb%3D12%26pid%3DApi%26ucfimg%3D1&q=0&b=1&p=0&a=0"
    },

]

let ajoutRec = document.getElementById("ajoutRec")
let template = document.getElementById("template");


let affTempl = document.getElementById("templateAffichage");


let affiche = document.getElementById("affiche");
affiche.style.display = "none";


function render() {
  const container = document.getElementById("ajoutRec");
  const template = document.getElementById("template");

  newRec.forEach((recette, index) => {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".image").src = recette.pic;
    clone.querySelector(".image").alt = recette.title;
    clone.querySelector("h3").textContent = recette.title;
    clone.querySelector(".tag.orange").textContent = recette.category;
    clone.querySelector(".tag.green").textContent = recette.time;
    clone.querySelector(".tag.blue").textContent = recette.difficult;

    const boutVoir = clone.querySelector(".voir");
    boutVoir.addEventListener("click", () => afficher(index));

    container.appendChild(clone);
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
    let motIngr = affIngr.value.split(";").map(mot => mot.trim()).filter(mot => mot !== "");
    
    let ul = document.createElement("ul");

    motIngr.forEach(mot => {
        let li = document.createElement("li");
        li.textContent = mot;        
        ul.appendChild(li);
        affIngr.appendChild(ul);
    });

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
render()

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
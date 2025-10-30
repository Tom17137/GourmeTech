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



// --------------- Main -----------------------


//let boutAjout = document.getElementById("bouton");
let form = document.getElementById("form")

let newRec = JSON.parse(localStorage.getItem("favoris")) || [];

let ajoutRec = document.getElementById("ajoutRec")
let template = document.getElementById("template");


let affTempl = document.getElementById("templateAffichage");


let affiche = document.getElementById("affiche");
affiche.style.display = "none";


function save() {
    localStorage.setItem("favoris", JSON.stringify(newRec));
}


function ajouter(event) {

    event.preventDefault();

    let titre = document.getElementById("titre");
    let cat = document.querySelector('input[name="Catégorie"]:checked');
    let temps = document.querySelector('input[name="Temps"]:checked');
    let dif = document.querySelector('input[name="Difficulté"]:checked');
    let ingr = document.getElementById("ingredients");
    let prepa = document.getElementById("prepa");
    let photo = document.getElementById("photo");

    let title = titre.value;
    let category = cat?.value || "";
    let time = temps?.value || "";
    let difficult = dif?.value || "";
    let ingredie = ingr.value;
    let prepara = prepa.value;
    let pic = photo.value;

    newRec.push ({
        title,
        category,
        time,
        difficult,
        ingredie,
        prepara,
        pic
    })

    console.log(newRec);

    ajoutRec.innerHTML = "";

    save();

    render();

    titre.value = "";
    cat.checked = false;
    temps.checked = false;
    dif.checked = false;
    ingr.value = "";
    prepa.value = "";
    photo.value = "";
}

function render() {
        
        let dernier = newRec[newRec.length -1];
        
        let clone = template.content.cloneNode(true);

        let cloneImg =  clone.querySelector(".image");
        cloneImg.src = dernier.pic;
        cloneImg.alt = dernier.title;
        clone.querySelector(".card-content h3").textContent = dernier.title;
        clone.querySelector(".tag.orange").textContent = dernier.category;
        clone.querySelector(".tag.green").textContent = dernier.time;
        clone.querySelector(".tag.blue").textContent = dernier.difficult;    

        ajoutRec.appendChild(clone)    
        
        let boutVoir = document.getElementById("voir");
        boutVoir.addEventListener("click", afficher);
}

function afficher () {

    affiche.innerHTML = "";

    let affDer = newRec[newRec.length -1];

    let affClone = affTempl.content.cloneNode(true);

    affClone.querySelector("#h3").textContent = affDer.title;
    affClone.querySelector(".tag.orange").textContent = affDer.category;
    affClone.querySelector(".tag.green").textContent = affDer.time;
    affClone.querySelector(".tag.blue").textContent = affDer.difficult; 
    let affCloneImg = affClone.querySelector(".image");
    affCloneImg.src = affDer.pic;
    affCloneImg.alt = affDer.title;
    let affIngr = affClone.querySelector("#tIngredients");
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

    let affClonePrepa = affClone.querySelector("#tPrepa");
    affClonePrepa.textContent = affDer.prepara;
    affClonePrepa.contentEditable = true
    let boutAffClone = affClone.querySelector("#boutonAffiche");
    boutAffClone.textContent;

    affiche.appendChild(affClone);
    
    affiche.style.display = "block";

    boutAffClone.addEventListener("click", function() {
        affiche.style.display = "none";
        save();
    })
}

form.addEventListener("submit", ajouter);


render()


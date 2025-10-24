Responsive:  max-width: 1023px; max-width: 768px

Pour le tableau fictif de la page favoris. Poue aider au codage car le localStorage sera vide.

[
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
    }
]

Recette API pour tableau fictif:

{
    "title": "Chocolate Apple Cake",
    "category": "dessert",
    "time": 45,
    "difficult": "Standard",
    "ingredie": [
        "185 gr butter",
        "185 gr good quality dark chocolate",
        "1 1/2 cups sugar",
        "1 vanilla pod, seeds only",
        "1 cup flour",
        "2/3 cup selfraising flour",
        "1/2 cup almond flour",
        "2 pieces apples, small chunks",
        "tablespoon optional; cinnamon, approx. ½",
        "3 eggs"
    ],
    "prepara": [
        "Preheat the oven to 180 C",
        "Put the butter and chocolate in a double boiler and over low heat let them melt slowly together. Once melted take of the heat and let it cool slightly.",
        "In a large bowl put the sugar, seeds of the vanilla pod and the eggs together and whisk until you have a light creamy mass.",
        "Add the flour, selfraising flour and almond flour and combine until it becomes an even mass.",
        "Add the melted chocolate/butter mix and stir until everything is completely combined.",
        "If you want you can sprinkle the apple chunks with cinnamon prior to adding them to the batter.",
        "Add the apple into the batter and mix well.",
        "Line a baking tin with baking paper",
        "Put the batter into the tin up to roughly 3/",
        "It's heavy batter so will not rise a lot.",
        "Bake for about 35 minutes or until the top of the cake feels firm to the touch.",
        "You can check with a wooden pin but keep in mind that it needs to be moist inside!"
    ],
    "pic": "https://img.spoonacular.com/recipes/638820-556x370.jpg"
}





Pour le responsive header
adapter le html:

<header>
        <div class="logo">
            <span class="icon">G</span>
            <span class="name">GourmeTech</span>
        </div>        

        <input type="checkbox" id="menu-checkbox">  
        <label for="menu-checkbox" class="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
            </label>

        <nav class="nav-links">
            <a href="#" class="page">Accueil</a>
            <a href="#">Ajouter une recette</a>
            <a href="#">Mes favoris</a>
            <a href="#">À propos</a>
        </nav>        
        <div class="night-mode">🌙</div>
    </header>

    et le css:

    @media all and (max-width: 1023px) {
        .nav-links {
        display: none;
        flex-direction: column;
        background: #f5f5f5;
        padding: 10px;
        }
    
        .menu-toggle {
            display: flex !important;
        }    
    
        #menu-checkbox:checked + .menu-toggle + .nav-links {
            display: flex;
        }
    
        body.dark-mode .nav-links {
            background: #2a2a2a;
        }
    }


    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
    }

    .menu-toggle span {
        background: #e67e22;
        height: 3px;
        width: 25px;
    }
    #menu-checkbox {
        display: none;
    }

    

    Pour le footer
    le css:

    @media all and (max-width: 768px) {
    footer {        
        flex-direction: column;
        gap: 40px;
    }
    }

    

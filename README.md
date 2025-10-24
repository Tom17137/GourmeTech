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




    Tableau favoris:


    [
    {
        "title": "test",
        "category": "Entrée",
        "time": "Rapide",
        "difficult": "Facile",
        "ingredie": "test",
        "prepara": "test",
        "pic": "https://assets.afcdn.com/recipe/20160401/465_w1024h576c1cx1588cy2398.jpg"
    },
    {
        "title": "toto",
        "category": "Plat",
        "time": "Moyen",
        "difficult": "Moyen",
        "ingredie": "toto",
        "prepara": "toto",
        "pic": "https://assets.afcdn.com/recipe/20160401/465_w1024h576c1cx1588cy2398.jpg"
    },
    {
        "title": "titi",
        "category": "Dessert",
        "time": "Long",
        "difficult": "Difficile",
        "ingredie": "titi",
        "prepara": "titi",
        "pic": "https://assets.afcdn.com/recipe/20160401/465_w1024h576c1cx1588cy2398.jpg"
    },
    {
        "title": "lulu",
        "category": "Entrée",
        "time": "Moyen",
        "difficult": "Difficile",
        "ingredie": "lulu",
        "prepara": "lulu",
        "pic": "https://assets.afcdn.com/recipe/20160401/465_w1024h576c1cx1588cy2398.jpg"
    },
    {
        "title": "lala",
        "category": "Entrée",
        "time": "Moyen",
        "difficult": "Moyen",
        "ingredie": "lala",
        "prepara": "lala",
        "pic": "lala"
    },
    {
        "title": "thtth",
        "category": "Entrée",
        "time": "Moyen",
        "difficult": "Facile",
        "ingredie": "test",
        "prepara": "test",
        "pic": "https://assets.afcdn.com/recipe/20160401/465_w1024h576c1cx1588cy2398.jpg"
    },
    {
        "title": "lili",
        "category": "Plat",
        "time": "Rapide",
        "difficult": "Moyen",
        "ingredie": "lili",
        "prepara": "lili",
        "pic": "https://s1.qwant.com/thumbr/474x355/b/e/d7fb902febe6badb37c84bf4c865d1788a2af804e735c70b6ba79cd8263a60/OIP.sfmWnaobp4KQ8CgrGvBnVQHaFj.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%2Fid%2FOIP.sfmWnaobp4KQ8CgrGvBnVQHaFj%3Fcb%3D12%26pid%3DApi&q=0&b=1&p=0&a=0"
    },
    {
        "title": "Recette",
        "category": "Plat",
        "time": "Moyen",
        "difficult": "Facile",
        "ingredie": "3 oeufs; 2kg de farine; 3 pommes;",
        "prepara": "kefjkefjkejfekf",
        "pic": ""
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
        "title": "Maple-Nut Oatmeal Cream Pies",
        "category": "dessert",
        "time": 45,
        "difficult": "Standard",
        "ingredie": [],
        "prepara": [
            ""
        ],
        "pic": "https://img.spoonacular.com/recipes/650946-312x231.jpg"
    },
    {
        "title": "Pork Schnitzel And Apple Salad",
        "category": "side dish",
        "time": 45,
        "difficult": "Standard",
        "ingredie": [],
        "prepara": [
            ""
        ],
        "pic": "https://img.spoonacular.com/recipes/656817-312x231.jpg"
    },
    {
        "title": "Choucroute Garni",
        "category": "lunch",
        "time": 45,
        "difficult": "Standard",
        "ingredie": [],
        "prepara": [],
        "pic": "https://img.spoonacular.com/recipes/57810-312x231.jpg"
    },
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
    },
    {
        "title": "Fig, Apple, and Arugula Salad",
        "category": "side dish",
        "time": 45,
        "difficult": "Standard",
        "ingredie": [
            "3 cups of roquette arugula lettuce",
            "3 figs",
            "1/2 an apple",
            "1 cup of red and green peppers",
            "Dressing",
            "1 tablespoon olive oil",
            "2 tablespoons of maple syrup",
            "1 teaspoon of fresh rosemary, finely chopped",
            "1 teaspoon of sumac powder"
        ],
        "prepara": [
            "Chop the veggies and fruits into bite sized morsels.",
            "Combine in a bowl.",
            "Make a salad dressing with the dressing ingredients.",
            "Pour over the salad when you want to eat the salad.",
            "Pix at http://rawgirlinmumbai.blogspot.com/2011/01/fig-apple-and-roquette-salad.html"
        ],
        "pic": "https://img.spoonacular.com/recipes/642807-556x370.jpg"
    },
    {
        "title": "A Healthier Cookie with Mini M&Ms",
        "category": "dessert",
        "time": 45,
        "difficult": "Standard",
        "ingredie": [
            "1 1/2 cups stone ground whole wheat flour",
            "1 Tbsp baking powder",
            "1 large egg, lightly beaten",
            "1/2 cup packed light brown sugar",
            "mini m&ms",
            "a pinch of salt",
            "1/2 cup steel cut oats",
            "1/2 stick of unsalted butter, room temp",
            "3/4 cup unsweetened applesauce",
            "1 tsp vanilla"
        ],
        "prepara": [
            "In a large bowl, using a hand mixer, cream together the butter and brown sugar until well combined.",
            "Add in the egg and vanilla and again mix to combine.",
            "Mix in the applesauce and combine. It will look a little broken but thats ok!In a small bowl combine the flour, oats, baking powder and salt.Slowly combine the dry mix into the wet until it just comes together, do not over mix!Using a spoon fold in the m&ms or dried fruit ;-)Using a small cookie scoop place the cookies onto a lined baking sheet.",
            "Bake for approx 12-14 minutes at 375 degrees, until lightly golden. These cookies will not change shape much because there is so little fat in there. So scoop out and press down lightly if you want them to flatten a bit.Now grab a glass of milk and DUNK!"
        ],
        "pic": "https://img.spoonacular.com/recipes/631902-556x370.jpg"
    },
    {
        "title": "Green Beans with Garlic Chips",
        "category": "side dish",
        "time": 45,
        "difficult": "Standard",
        "ingredie": [
            "1 tablespoon apple cider vinegar",
            "3 garlic cloves thinly sliced",
            "1 1/2 pounds green beans, trimmed",
            "2 tablespoons extra-virgin olive oil",
            "Slavosalt seasoning – or salt and pepper",
            "2 tablespoon unsalted butter + ½ teaspoon",
            "1 tablespoon white balsamic vinegar",
            "½ yellow onion, sliced"
        ],
        "prepara": [
            "Heat the oil with the garlic in a heavy skillet over medium heat. Cook stirring occasionally, until the garlic is golden.",
            "Remove the garlic from the skillet with a slotted spoon and transfer to a paper towel.",
            "Add the butter to the oil in the skillet and heat over medium heat.",
            "Add the onions, salt and pepper and saut, until the onions are translucent and starting to turn golden.",
            "Add the beans and continue cooking stirring occasionally. Stir in both vinegars and season with salt and pepper to taste.",
            "Transfer the beans to a serving dish and sprinkle with the garlic chips."
        ],
        "pic": "https://img.spoonacular.com/recipes/645416-556x370.jpg"
    },
    {
        "title": "Green Beans with Garlic Chips",
        "category": "side dish",
        "time": 45,
        "difficult": "Standard",
        "ingredie": [
            "1 tablespoon apple cider vinegar",
            "3 garlic cloves thinly sliced",
            "1 1/2 pounds green beans, trimmed",
            "2 tablespoons extra-virgin olive oil",
            "Slavosalt seasoning – or salt and pepper",
            "2 tablespoon unsalted butter + ½ teaspoon",
            "1 tablespoon white balsamic vinegar",
            "½ yellow onion, sliced"
        ],
        "prepara": [
            "Heat the oil with the garlic in a heavy skillet over medium heat. Cook stirring occasionally, until the garlic is golden.",
            "Remove the garlic from the skillet with a slotted spoon and transfer to a paper towel.",
            "Add the butter to the oil in the skillet and heat over medium heat.",
            "Add the onions, salt and pepper and saut, until the onions are translucent and starting to turn golden.",
            "Add the beans and continue cooking stirring occasionally. Stir in both vinegars and season with salt and pepper to taste.",
            "Transfer the beans to a serving dish and sprinkle with the garlic chips."
        ],
        "pic": "https://img.spoonacular.com/recipes/645416-556x370.jpg"
    },
    {
        "title": "Boeuf Bourgignon",
        "category": "lunch",
        "time": 45,
        "difficult": "Standard",
        "ingredie": [
            "1 pound button mushrooms, quartered",
            "2 tbsp butter",
            "2 strips of un-smoked bacon, chopped",
            "1 tbsp olive oil or vegetable oil",
            "3 pounds well-trimmed boneless beef chuck, cut into 2″ cubes",
            "1 medium yellow onion, finely chopped",
            "2 medium shallots, finely chopped",
            "2 medium carrots, sliced",
            "Salt and freshly ground black pepper, to taste",
            "1 tbsp flour (see head note)",
            "1 cup cognac, (see head note)",
            "3 cups beef stock (see head note)",
            "2 tbsp unsweetened cocoa powder",
            "2 garlic cloves, minced",
            "2 teaspoons fresh thyme",
            "1/4 cup fresh flat-leaf parsley leaves, roughly chopped",
            "1 tbsp tomato paste",
            "1 bay leaf"
        ],
        "prepara": [
            "Preheat oven to 160 C (325 F).",
            "In a pan saut the mushrooms in butter till brown and soft. Keep aside.",
            "In a deep-bottomed pot/cesserole, saut the bacon in 1 tbsp oil over moderate heat for 2 to 3 minutes to brown lightly.",
            "Remove to a side dish with a slotted spoon. Reheat the pan until fat is almost smoking before you saut the beef. Saut the beef in the bacon fat in batches making sure not to crowd the pieces (the pieces need to brown on all sides, not sweat).",
            "Add the browned pieces of beef to the bacon. Lower the heat to medium. In the same fat, add the onions, shallots and carrots. Cook till the carrots soften.",
            "Add the cooked veggies to the beef and bacon.",
            "Pour out the sauting fat.",
            "Return beef to the casserole. Then sprinkle on the flour and toss to coat the beef lightly with the flour. Stir everything around till the flour is cooked and no white traces of it remain.",
            "Add the bacon and veggies and season with salt and pepper.  Stir in the cognac and enough stock so that the meat is barely covered.",
            "Add the garlic, thyme, parsley, tomato paste and bay leaf. Bring to simmer on top of the stove. Cover the casserole and set it in the oven. Cook for 2 1/2 to 3 hours. About 1 hour into the cooking add the mushrooms and stir in the cocoa powder. Return to the oven. The stew is done when the meat is fork-soft."
        ],
        "pic": "https://img.spoonacular.com/recipes/635574-556x370.jpg"
    }
]

**1 - Gestion generale du stand**
***Chaque jour, avant que la journée commmence,:***
- "Prix du Menu" vous laisse choisir le prix de chaque ingrédient, sachant que plus le prix sera élevé, plus le multiplicateur d'argent général sera bas. (*Il y en a une chance qu'un ingredient aura un bonus de 35% pur ce jour*) (**voir infos mathematiques**)
- Si vous possédez les fonds suffisants ; vous pouvez achetez des ameliorations (permanentes) dans l'onglet "Améliorations" et/ou une publicite (pour 5 jour) qui donne un bonus appliqué au multiplicateur général.
- Finalement, dans l'onglet "stock" vous pouvez acheter les différents ingrédients disponibles sachant que plus vous en achetez, plus le prix d'un stock devient cher, et si vous en achetez pas, il baissera. **(voir mathematiques pour + d'infos)**
- Après avoir tout acheté et géré, vous n'avez qu'à appuyez sur "confirmer les paramètres" et vous commencerez la journée. une météo entre [neige,tempete,pluie,nuage,soleil] génerée aléatoirement affectera le multiplicateur générale causant une baisse ou une hausse du prix de vente de produits.
- Si vous n'avez aucun stock vous perdrez 2% de votre argent à cause de dissatisfaction de client. Le jeu se termine si vous n'avez plus d'ingrédients de stock et pas suffisamment d'argent pour en acheter.
- Avec toutes ces informations, vous pouvez construire votre stratégie pour efficacement gérer votre stand et votre finances. Boonne chance!

**2 - Les mathematiques du programme (multiplieurs, achats, bonus, etc)**
- À coté de votre argent, il y a un multiplicateur qui sera appliqué sur le prix de vente des produits, c'est multiplicateur de météo mulitplié par le multiplicateur de publicités (bonus). **(Voir infos sur ces deux par suite)**
- Le multiplicateur de météo sera initialisé aléatoirement par la météo : Neige : 0.65 ; Tempête: 0.75 ; Pluie : 0.85 ; Nuage : 1 ; Soleil : 1.15
- Ce multiplicateur peu baisser d'avantage en corrélation avec la valeur du prix que vous choisissez des ingrédients, le plus haut que sera leur prix, le plus bas que sera le multiplicateur. Voici l'image de la variation: <br/>
<img width="409" alt="image" src="https://github.com/michaelalhouwayek/lemonadestand/assets/156347349/8978b8b2-523e-4458-8188-d33ae21f2cf7"> <br/>
- Le multiplicateur de publicité sera appliqué pendant 5 jours sur le multiplieur globale (météo*publicité), il peut être de 1.10,1.25,1.50 (voir jeu)
- De plus, un autre multiplicateur existant est celui de l'ingrédient du jour; chaque jour il y a 50% chance qu'un ingrédient soit choisi comme "ingrédient du jour", son prix à la vente sera donc augmenté de 35% (x1.35 le prix que vous choisissez). Ce multiplicateur n'est pas lié au multiplieur global.
- La formule utilisée à la vente d'un produit est prix_choisi x multiplieur_ingredient x multiplieur_globale
- Le nombre de clients qui apparaitront est proportionel a la météo, le pire qu'elle est, le moins que les clients apparaitra (formule qui fait un calcul aleatoire du probabilité), et aussi le multiplicateur global baissera, donc il y a un aspect de chance. C'est par la que l'amélioration de prévision météo sera utile, vous pourrez décider préalablement comment vous voulez variez vos prix et votre stock.
- Finalement, le prix des stocks varie de la facon suivante: Si vous n'en achetez aucun, elle baisse ; si vous en achetez 1 ou 2, elle reste la meme; et si vous en achetez plus de 2, pour chaque 3 ingredients additionels, le prix augmentera. > Elle hausse de 60% du prix initital visible au debut du jeu et elle baisse de 10% de sa valeure actuelle.

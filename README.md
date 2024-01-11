Projet Python 1: Mordle

Cahier des charges

Nom/objectif: Mordle: développer un programme python similaire au jeu Wordle en ligne.

Contraintes/règles: Il faut deviner un mot, le jeu indique si une lettre est dans le mot et dans la position correcte, ou si elle appartient au mot mais dans la fausse position. Tu as 5 chances pour deviner le mot complet correctement.

Squelette: Après la création et assignation de variables (mot_deviner, mots_cachee) et une liste de mots (mots) avec une liste de définitions de chaque mots, on crée un boucle while où se déroulera le code principal, dans cette boucle on a des conditions qui vérifie les lettres obtenues d'après un ‘input’ donné par le joueur, et si ces lettres sont dans la position correcte et/ou dans le mot (les lettres sont donc mis dans une liste et leurs index comparés avec la liste des lettres du mot à deviner).

Étapes du développement: 

0.1.0: faire un code avec une petite liste de 6 mots et une interface de base composée uniquement de texte
0.2.0: régler le problème d’affichage lorsqu’une lettre apparaît plusieurs fois et avoir une liste plus longue
0.3.0: ajout des définitions des mots
 
"avion", "blanc", "chien", "douze", "euros", "fable", "gazon", "habit", "idole", "jouet", "laser", "moule", "noble", "orvet", "piano", "quasi", "route", "sable", "table", "usine", "vague", "wagon", "xyste", "yacht", "zabre",

0.3.1: utilisateur choisi si il veut définitions



Compte-rendu écrit

Tout d'abord, nous avons en premier établi un code de base qui ressemble au jeu du pendu, puis nous avons ajouté les exigences pour le jeu du Wordle, que nous avons renommé “Mordle” pour notre version, reprenant la première lettre de nos deux prénoms. Le jeu se déroule dans une boucle while qui est active tant que le mot n’est pas complètement deviné par l’utilisateur et que les 5 chances pour deviner le mot ne sont pas toutes utilisées. Par la suite, nous avons corrigé quelques erreurs de code entre les versions 0.1 et 0.2. Par exemple, une difficulté majeure que nous avons rencontrée fut la suivante: lorsqu’on avait des lettres qui se répétaient dans un mot, cela causait un problème dans la manipulation de la liste du mot à deviner. Nous avons alors décidé de simplement avoir une liste de mots (ceux pouvant être utilisés par le jeu) n’ayant aucune répétition de lettre dans chacun de ses mots (v0.2) et qui fut également plus longue. Comme dernière addition nous avons ajouté des définitions pour chaque mot de la liste, ainsi que d’autres informations sur le mot pour le rendre plus facile à deviner. (v0.3) Finalement, on avait également l’intention de développer une interface graphique mais en raison de la complexité de Tkinter nous l’avons laissée pour des objectifs futurs. 


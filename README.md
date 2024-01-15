Projet 2: When Life gives you L3monz - Cahier de charges.

Nom/objectif: When Life gives you L3monz: développer un site web qui simule une entreprise de stand de limonade pour mieux comprendre des notions de base d'economie (Spé SES).

Contraintes/règles: Vous êtes un joueur qui doit prendre soin de son stand lemande en gérant ses finances avec les publicités, les prix des boissons et la décoration du stand. En fonction de la météo et du nombre de clients disponibles, vous devez gérer différents aspects de votre stand de limonade pour réaliser des bénéfices et éviter de perdre de l'argent. Le jeu suit la loi de l'offre et de la demande.

Squelette: Nous commençons par établir les variables qui seront ensuite utilisées pour déterminer la météo, les bénéfices, les tarifs des clients, etc. Ensuite, nous continuons en initialisant les principaux aspects du jeu sur le front et le back end. Après cela nous avons une boucle pour le jeu qui compterait les tours tout en randomisant à chaque fois certains aspects du jeu de manière différente rendant plus ou moins difficile la gestion de votre entreprise. D'autres fonctions de gestion du temps et des coûts seront également utilisées pour suivre les progrès.

Étapes du développement: 

0.1.0: Nous n'avons pas encore établi une version stable du jeu.


Compte-rendu écrit

Tout d'abord, nous avons en premier établi un code de base qui ressemble au jeu du pendu, puis nous avons ajouté les exigences pour le jeu du Wordle, que nous avons renommé “Mordle” pour notre version, reprenant la première lettre de nos deux prénoms. Le jeu se déroule dans une boucle while qui est active tant que le mot n’est pas complètement deviné par l’utilisateur et que les 5 chances pour deviner le mot ne sont pas toutes utilisées. Par la suite, nous avons corrigé quelques erreurs de code entre les versions 0.1 et 0.2. Par exemple, une difficulté majeure que nous avons rencontrée fut la suivante: lorsqu’on avait des lettres qui se répétaient dans un mot, cela causait un problème dans la manipulation de la liste du mot à deviner. Nous avons alors décidé de simplement avoir une liste de mots (ceux pouvant être utilisés par le jeu) n’ayant aucune répétition de lettre dans chacun de ses mots (v0.2) et qui fut également plus longue. Comme dernière addition nous avons ajouté des définitions pour chaque mot de la liste, ainsi que d’autres informations sur le mot pour le rendre plus facile à deviner. (v0.3) Finalement, on avait également l’intention de développer une interface graphique mais en raison de la complexité de Tkinter nous l’avons laissée pour des objectifs futurs. 


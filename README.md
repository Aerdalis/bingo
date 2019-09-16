# Bingo
Générateur de grille de bingo, lancé suite aux twitchs dessins de Boulet.
- [Grille de Boulet](http://htmlpreview.github.io/?https://raw.githubusercontent.com/Aerdalis/bingo/master/bingos/bingo_boulet_dessin.html)

Pour les utilisateurs de Edge :
- [Grille de Boulet (hors ligne)](https://raw.githubusercontent.com/Aerdalis/bingo/master/bingos/bingo_boulet_dessin.html) (clic droit, enregistrer sous...)


Les différents grilles sont dans bingo.

Pour créer une nouvelle grille dans un simple fichier:
- modifier la grille [bingo_boulet_dessin.html](https://github.com/Aerdalis/bingo/blob/master/bingos/bingo_boulet_dessin.html)

Ou

- remplir [contenu.js](https://github.com/Aerdalis/bingo/blob/master/contenu.js)
- ouvrir [bingo.html](https://github.com/Aerdalis/bingo/blob/master/bingo.html)
- supprimer 
```
<script type="application/javascript" src="contenu.js"></script>	<!-- change here to load specific bingo configuration -->
```
- copier le contenu modifié de contenu.js immédiatement après 
```
	//<![CDATA[
```
# License
Copyleft (ↄ) 2017

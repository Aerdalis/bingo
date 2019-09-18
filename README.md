# Bingo
Générateur de grille de bingo, lancé suite aux twitchs dessins de Boulet.
Les différents grilles sont dans bingo. Pour jouer deux versions sont disponibles : en ligne et hors ligne.

## Boulet
- [Grille de Boulet](http://htmlpreview.github.io/?https://raw.githubusercontent.com/Aerdalis/bingo/master/bingos/bingo_boulet_dessin.html)

Pour les utilisateurs de Edge :
- [Grille de Boulet (hors ligne)](https://raw.githubusercontent.com/Aerdalis/bingo/master/bingos/bingo_boulet_dessin.html) (clic droit, enregistrer sous...)

## CanardPC
- [Grille CPC](http://htmlpreview.github.io/?https://raw.githubusercontent.com/Aerdalis/bingo/master/bingos/bingo_stream_CPC.html)

Version hors ligne et pour les utilisateurs de Edge :
- [Grille CPC (hors ligne)](https://raw.githubusercontent.com/Aerdalis/bingo/master/bingos/bingo_stream_CPC.html) (clic droit, enregistrer sous...)

# Créer une nouvelle grille
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

N'hésitez pas à forker/envoyer des commentaires/envoyer des modifications.

# License
Copyleft (ↄ) 2019

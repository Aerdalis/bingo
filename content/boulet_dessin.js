	var row = 7;	// nombre de lignes
	var col = 7;	// nombre de colones
	var title = "Bingo Boulet";	//titre du bingo
	var bingo = [
	"*Pouic pouic* de la tablette",
	"Imprévu technique",
	"Quelqu'un demande ses recommandations de bd/série/film",
	"Boulet oublie de sauvegarder pendant 1h",
	"KrysaliaH fait un sondage",
	"Mauvais calque",
	"Le chat panique, Boulet ne voit rien",
	"Point tablette",
	"Lewis Trondheim",
	"Anecdote fabuleuse",
	"Petite discussion scientifique",
	"Creepy pasta",
	"Le live dure (bien) plus longtemps que Boulet l'avait dit",
	"\"Va comme j'te pousse\"",
	"\"Je comprends pas ce que tu me dis\"",
	"Téléphone grésille",
	"Point zizi (monstre suggestif)",
	"Point Melkpat - le chat fait une blague terrible",
	"Boulet fait une blague terrible",
	"Quelqu'un demande pourquoi il n'y a pas de cintiq",
	"Quelqu'un demande une casquette à hélice", 
	"La chaise / la tablette / le stylet / Boulet couine",
	"\"Il manquerait plus que je sois professionnel\"", 
	"Chute / maltraitance de micro",
	"\"Je coupe j'ai faim\"",
	"P'tits traits",
	"\"J'adore tes petits traits\"",
	"Chat : \"J'adore ta voix\"",
	"Boulet s'amuse du pseudo de quelqu'un",
	"\"Hopla !\"",
	"La chaise de bureau grince/se casse/s’affaisse",
	"\"Pas cher, parlez-en à vos amis\"",
	"Tisane ou whisky",
	"Teasing de ouf. \"Je ne peux encore rien dire\"",
	"T-shirt mangez des nouilles",
	"Voix sensuelle dans le micro",
	"Point ASMR",
	"Imitation",
	"Réaction épidermique précoce du chat",
	"\"@?~^ ! J'ai oublié [...]\"",
	"\"Mais nan mais ça on s'en fout, ça se verra pas\"",
	"C’est la faute du chat",
	"Point violet",
	"Lac du Connemara",
	"Dessin sur le bord de la feuille pout expliquer un truc",
	"BouletBox : Boulet bruite à la bouche ce qu'il dessine",
	"Boulet dit un truc avec son stylet dans la bouche",
	"\"J'ai reçu un message, attendez une minute\"",
	"\"Je vais faire un truc de feignant\"",
	"Quelqu'un demande son papier préféré",
	"\"Y a coloc. Hey Coloc ! Je streame la\"",
	"Une fenêtre Cookie Clicker sauvage apparait"
	];	// contenu des cases de la grille
	var credits = "Avec les contributions du chat twitch, dont KrysaliaH, bidord, fabbouz, hemostick, majorgrubert, MarieOrtie, meumeum, Philem, ramathi, sarcellecannelle, sophie3869, treguy, youpipouet, Vader666th, claire_ette906 et quelques oubliés.";	// sources et remerciements
	// couleurs :
	document.documentElement.style.setProperty('--main_color', '#D8761B');
	document.documentElement.style.setProperty('--main_bg_color', '#FFFFFF');
	document.documentElement.style.setProperty('--sel_color', '#FFFFFF');
	document.documentElement.style.setProperty('--sel_bg_color', '#E16E16');
	document.documentElement.style.setProperty('--hover_bg_color', '#F17E26');
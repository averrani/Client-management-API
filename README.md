# Web API pour la gestion de clients 

Cet API permet d'afficher plusieurs milliers de clients contenus dans un fichier Json sur un tableau qui peut être trié.
Elle permet également d'ajouter, de modifier ou de supprimer un client.
La partie Backend est dans le dossier server, le dossier client contient la partie front-end.

Modules utilisés :

Express 

Eslint

Nodemon : redémarrage automatique du serveur 

Cors : compatibilité 

COMMENT EXECUTER L'API : 

ouvrir avec la console les sous-dossiers client et server

Pour chacun d'entre eux, lancer `npm i dependencies`

Pour chacun d'entre eux, lancer `npm run dev`

Ouvir le navigateur et taper "http://localhost:3000/list.html"


kill -9 $(lsof -t -i:3001)

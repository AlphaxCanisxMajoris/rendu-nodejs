import express from "express";
import cors from "cors";
import router from "./router.js";
import bodyParser from "body-parser";
//importation des modules
const app = express(); //Création d'une instance de l'application Express
app.use(bodyParser.json()); // analyse les corps des requêtes entrantes
app.use(bodyParser.urlencoded({ extended: true })); // analyse les corps des requêtes entrantes lorsque les données sont codées en URL
app.use(cors()); //Permet d'interagir sans restriction liée à la sécurité
app.use(router); //Intègre le router attachant tout ses routes.
app.listen(3000, () => {
  console.log("Server is running on port 3000");
}); //permet de démarrer le serveur sur le port 3000. Une fois le serveur démarré, il affiche un message dans la console pour confirmer son démarrage

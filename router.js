import express from "express"; //importe le framework express
import agents from "./routes/AgentRoutes.js"; //importe un module de routes pour gérer les routes liées aux agents

const router = express.Router(); //configuration du routeur

router.use("/agents", agents); //Intégration des sous-routeurs

export default router; //exportation du routeur

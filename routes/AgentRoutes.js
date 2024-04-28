import express from "express";
import {
  getAgents,
  getAgent,
  createAgent,
  updateAgent,
  deleteAgent,
} from "../controllers/AgentController.js";
//importe des fonctions spécifiques depuis le fichier AgentController.js

const router = express.Router();
//Initialise le routeur
router.get("/", getAgents);
router.get("/:id", getAgent);
router.post("/", createAgent);
router.put("/:id", updateAgent);
router.delete("/:id", deleteAgent);
//définition des routes
export default router;
//exportation du routeur

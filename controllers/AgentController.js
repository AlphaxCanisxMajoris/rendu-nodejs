import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient(); //initialise une instance du client

const getAgents = (req, res) => {
  prisma.agent
    .findMany()
    .then((agents) => {
      res.json(agents);
    })
    .catch((error) => {
      res.json(error);
    });
}; //récupère tous les agents de la base de données

const getAgent = (req, res) => {
  let id = Number(req.params.id);
  prisma.agent
    .findUnique({
      where: {
        id: id,
      },
    })
    .then((agents) => {
      res.json(agents);
    })
    .catch((error) => {
      res.json(error);
    });
};
//récupère un agent spécifique en utilisant l'id

const createAgent = (req, res) => {
  let agent = req.body;
  console.log(agent);
  prisma.agent
    .create({
      data: {
        name: agent.name,
      },
    })
    .then((agent) => {
      res.json(agent);
    })
    .catch((error) => {
      res.json(error);
    });
};
//fonction pour créer un nouvel agent avec les données reçues dans le corps de la requête ('req.body). Affiche les données dans la console et enregistre l'agent dans la base de données.
const updateAgent = (req, res) => {
  let id = Number(req.params.id);
  let agent = req.body;

  prisma.agent
    .update({
      where: {
        id: id,
      },
      data: {
        name: agent.name,
      },
    })
    .then((agent) => {
      res.json(agent);
    })
    .catch((error) => {
      res.json(error);
    });
};
//mise à jour de l'agent identifié par id par les nouvelles données de la requête

const deleteAgent = (req, res) => {
  let id = Number(req.params.id);

  prisma.agent
    .delete({
      where: {
        id: id,
      },
    })
    .then((agent) => {
      res.json(agent);
    })
    .catch((error) => {
      res.json(error);
    });
}; //supprime un agent demandé par son id et renvoie l'objet supprimé en réponse

// const app = express();
// app.use(express.json());

// app.get("/agents", getAgents);
// app.get("/agents/:id", getAgent);
// app.post("/agents", createAgent);
// app.put("/agents/:id", updateAgent);
// app.delete("/agents/:id", deleteAgent);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

export { getAgents, getAgent, createAgent, updateAgent, deleteAgent };
//exportation de toutes les fonctions

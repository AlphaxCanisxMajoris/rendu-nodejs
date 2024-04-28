let url = window.location.search;
let id = new URLSearchParams(url).get("id");
console.log(id); // Récupération de l'agent

// Récupération et affichage de l'agent
fetch(`http://localhost:3000/agents/${id}`)
  .then((response) => response.json())
  .then((data) => {
    let agentDisplay = document.querySelector("#agent");
    agentDisplay.innerHTML = `
      <small>${data.id}</small>
      <h1>${data.name}</h1>
      <a href="index.html">Back</a>
    `;
    // Charge également le nom de l'agent dans le champ de texte pour la mise à jour
    document.querySelector('input[name="agent"]').value = data.name;
  })
  .catch((error) => console.error("Failed to fetch or display agent:", error));

// Mise à jour de l'agent
const updateAgent = async () => {
  let newName = document.querySelector('input[name="agent"]').value;
  try {
    await fetch(`http://localhost:3000/agents/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newName }),
    });
    window.location.href = "index.html"; // Redirection après la mise à jour
  } catch (error) {
    console.error("Failed to update agent:", error);
  }
};

// Suppression de l'agent
const deleteAgent = async () => {
  try {
    await fetch(`http://localhost:3000/agents/${id}`, {
      method: "DELETE",
    });
    window.location.href = "index.html"; // Redirection après suppression
  } catch (error) {
    console.error("Failed to delete agent:", error);
  }
};

// Affichage de tous les agents
const afficherAgent = async () => {
  try {
    const response = await fetch("http://localhost:3000/agents");
    const agents = await response.json();
    let agentsList = document.querySelector("#agents");
    agentsList.innerHTML = ""; // Nettoie la liste avant de la remplir à nouveau
    agents.forEach((agent) => {
      agentsList.innerHTML += `<h2>${agent.name}</h2>`; // Affiche chaque agent par son nom
    });
  } catch (error) {
    console.error("Failed to fetch agents:", error);
  }
};

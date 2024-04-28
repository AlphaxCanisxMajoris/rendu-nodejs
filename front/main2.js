console.log('hello world')

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

document.getElementById('dark-bouton').addEventListener('click', toggleDarkMode);
//animation dark mode

type="text/javascript">window.addEventListener("scroll", function(){var header = document.querySelector("header"); header.classList.toggle("sticky",window.scrollY > 0);
})
//animation barre de navigation

function fetchSorcier(sorcier) {
    return fetch('https://hp-api.lainocs.fr/characters/' + sorcier)
    .then((response) => response.json());
}

async function displaySorcier(sorcier, containerId) {
    const data = await fetchSorcier(sorcier);
    const container = document.getElementById(containerId);
    const sorcierElement = document.createElement("div");
    
    sorcierElement.innerHTML = `
    <img src="${data.image}" alt="${data.name}" class="image-taille"/>
    <h1>${data.name}</h1>
    <h2>${data.house}</h2>
    <p>${data.patronus}</p>
    <p>${data.role}</p>
    <p>${data.blood}</p>
    <p>${data.birthday}</p>
    `;
    
    container.appendChild(sorcierElement);
    sorcierElement.className = "cartes-fond"
}

displaySorcier("harry-potter", "characters");
displaySorcier("hermione-granger", "characters");
displaySorcier("ron-weasley", "characters");
displaySorcier("bellatrix-lestrange", "characters");
displaySorcier("neville-longbottom", "characters");
displaySorcier("minerva-mcgonagall", "characters");
displaySorcier("sirius-black", "characters");
displaySorcier("cedric-diggory", "characters");
displaySorcier("albus-dumbledore", "characters");
displaySorcier("severus-snape", "characters");
displaySorcier("lord-voldemort", "characters");
displaySorcier("gregory-goyle", "characters");
displaySorcier("gilderoy-lockhart", "characters");
displaySorcier("luna-lovegood", "characters");
displaySorcier("cho-chang", "characters");
displaySorcier("lucius-malfoy", "characters");
displaySorcier("doloress-umbridge", "characters");
displaySorcier("nymphadora-tonks", "characters");
displaySorcier("remus-lupin", "characters");
displaySorcier("fred-weasley", "characters");
displaySorcier("george-weasley", "characters");
displaySorcier("quirinus-quirrel", "characters");
displaySorcier("rubeus-hagrid", "characters");
displaySorcier("ginny-weasley", "characters");
displaySorcier("peter-pettigrew", "characters");
displaySorcier("viktor-krum", "characters");
displaySorcier("fleur-delacour", "characters");
//API Harry Potter
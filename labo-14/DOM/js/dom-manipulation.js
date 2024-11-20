// 1. write() - Schrijft direct naar de HTML van de pagina bij het laden
document.write("<p>Dit is toegevoegd met <code>document.write()</code> tijdens het laden van de pagina.</p>");
        
// 2. innerHTML - Wijzig de HTML-inhoud van een element
// let titelElement = document.querySelector(".title");
titelElement.innerHTML = "How I Met Your Mother - Personages bijgewerkt";

// 3. textContent - Wijzig alleen de tekstinhoud van een element
let tedElement = document.getElementById("ted");
tedElement.textContent = "Theodore Evelyn Mosby"; // Wijzig naam naar volledige naam van Ted

// 4. Attributes - Voeg een nieuw attribuut toe aan een element
// let barneyElement = document.getElementById("barney");
barneyElement.setAttribute("title", "Legendary Character"); // Voeg een titel-attribuut toe aan het Barney-element

// Toon het toegevoegde attribuut in de console
console.log("Attribuut 'title' van Barney:", barneyElement.getAttribute("title"));

// 5. removeChild - Verwijder een kind-element
let characterList = document.querySelector(".character-list");
let lilyElement = document.getElementById("lily");
characterList.removeChild(lilyElement); // Verwijder Lily uit de lijst

// 6. appendChild - Voeg een nieuw kind-element toe
let nieuwPersonage = document.createElement("li");
nieuwPersonage.textContent = "Ranjit Singh"; // Voeg Ranjit toe als een nieuw personage
nieuwPersonage.setAttribute("class", "character"); // Voeg de "character" klasse toe
characterList.appendChild(nieuwPersonage);

// Console output voor controle
console.log("Titel na innerHTML:", titelElement);
console.log("Ted element na textContent:", tedElement);
console.log("Character list na removeChild en appendChild:", characterList.innerHTML);

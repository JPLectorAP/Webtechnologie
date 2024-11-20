// 1. Event Listener: Klik op een personage en toon informatie
let characters = document.querySelectorAll(".character");
characters.forEach(character => {
    character.addEventListener("click", function (event) {
        let output = document.getElementById("output");
        output.innerHTML = `
            <p><strong>Naam:</strong> ${event.target.textContent}</p>
            <p><strong>ID:</strong> ${event.target.id}</p>
            <p><strong>Event Type:</strong> ${event.type}</p>
        `;
    });
});

// 2. Event Object Demonstratie: Toon informatie over een muisovergang (mouseover)
characters.forEach(character => {
    character.addEventListener("mouseover", function (event) {
        console.log("Mouseover event:", event);
        event.target.style.color = "blue"; // Verander tekstkleur bij hover
    });

    character.addEventListener("mouseout", function (event) {
        event.target.style.color = "black"; // Herstel tekstkleur na hover
    });
});

// 3. DOM Event Handler: Toon/Verschuil de lijst met personages
let toggleButton = document.getElementById("toggleCharacters");
toggleButton.onclick = function () {
    let characterList = document.querySelector(".character-list");
    if (characterList.style.display === "none") {
        characterList.style.display = "block";
        toggleButton.textContent = "Verberg Personages";
    } else {
        characterList.style.display = "none";
        toggleButton.textContent = "Toon Personages";
    }
};

// 4. HTML Event Handler: Gebruik een inline onclick in de HTML
document.write('<button onclick="alert(\'Dit is een HTML Event Handler!\')">Klik Mij!</button>');

// 5. Event Types: Muisbeweging (mousemove)
document.body.addEventListener("mousemove", function (event) {
    let output = document.getElementById("output");
    output.textContent = `Mouse position - X: ${event.clientX}, Y: ${event.clientY}`;
});

// 6. Prevent Default Demonstratie: Annuleer standaardgedrag
let title = document.querySelector(".title");
title.addEventListener("click", function (event) {
    event.preventDefault(); // Voorkomt standaard gedrag
    alert("Je hebt op de titel geklikt, maar de standaardactie is geannuleerd!");
});
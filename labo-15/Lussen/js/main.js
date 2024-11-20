// HIMYM personages array
let personages = ["Ted", "Robin", "Barney", "Lily", "Marshall"];

// 1. For loop: Itereren over de array van personages
console.log("For Loop Resultaten:");
for (let i = 0; i < personages.length; i++) {
    console.log(`${i + 1}: ${personages[i]}`);
}

// 2. While loop: Print elke letter van Barney's naam
let naam = "Barney";
let index = 0;
console.log("While Loop Resultaten:");
while (index < naam.length) {
    console.log(`Letter ${index + 1}: ${naam[index]}`);
    index++;
}

// 3. Do-while loop: Countdown van 5 tot 1
let countdown = 5;
console.log("Do-While Loop Resultaten:");
do {
    console.log(`Countdown: ${countdown}`);
    countdown--;
} while (countdown > 0);
console.log("Legen... wait for it... dary!");



// 4. Gecombineerd met DOM manipulatie
let output = document.getElementById("output");

// a) For loop: Itereren over de array van personages
let forResult = "<h2>For Loop Resultaten:</h2><ul>";
for (let i = 0; i < personages.length; i++) {
    forResult += `<li>${personages[i]}: personage ${i + 1}</li>`;
}
forResult += "</ul>";
output.innerHTML += forResult;

// b) While loop: Print elke letter van Barney's naam
naam = "Barney";
index = 0;
let whileResult = "<h2>While Loop Resultaten:</h2><p>";
while (index < naam.length) {
    whileResult += `Letter ${index + 1}: ${naam[index]}<br>`;
    index++;
}
whileResult += "</p>";
output.innerHTML += whileResult;

// c) Do-while loop: Toon een countdown van 5 tot 1 (Barney wacht op zijn "legen...dary!")
countdown = 5;
let doWhileResult = "<h2>Do-While Loop Resultaten:</h2><p>Countdown voor Barney:</p><p>";
do {
    doWhileResult += `${countdown}... `;
    countdown--;
} while (countdown > 0);
doWhileResult += "Legen... wait for it... dary!";
output.innerHTML += doWhileResult;
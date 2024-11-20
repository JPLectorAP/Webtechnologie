let personage = "Barney";
let leeftijd = 35;
let beroepen = ["architect", "nieuwslezer", "please", "jurist"];

// 1. Vergelijkingsoperatoren
if (leeftijd >= 18) {
    console.log(`${personage} is een volwassene.`);
} else {
    console.log(`${personage} is minderjarig.`);
}

// -- Ternary operator
leeftijd = 16;
leeftijd >= 18 ? console.log(true) : leeftijd > 12 ? console.log("12 < leeftijd < 18") : console.log("leeftijd < 12");

// 2. Logische operatoren
let isVolwassen = leeftijd >= 18;
let heeftBeroep = beroepen.includes("architect");

personage = "Ted";
if (isVolwassen && heeftBeroep) {
    console.log(`${personage} is een volwassen architect.`);
} else if (isVolwassen || heeftBeroep) {
    console.log(`${personage} heeft óf een beroep, óf is volwassen.`);
} else {
    console.log(`${personage} voldoet aan geen van beide criteria.`);
}

// 3. if-else statements
personage = "Lily";
if (personage === "Ted") {
    console.log("Ted is een architect professor.");
} else if (personage === "Robin") {
    console.log("Robin is een nieuwsanker.");
} else if (personage === "Lily") {
    console.log("Lily is een kleuterjuf.");
} else {
    console.log("Onbekend personage.");
}

// 4. switch statement
switch (personage) {
    case "Ted":
        console.log(`${personage} is een architect.`);
        break;
    case "Robin":
        console.log(`${personage} is een nieuwslezer.`);
        break;
    case "Barney":
        console.log(`${personage} zegt: 'It's gonna be legen... wait for it... dary!'`);
        break;
    case "Lily":
        console.log(`${personage} is een kleuterjuf.`);
        break;
    case "Marshall":
        console.log(`${personage} is een jurist.`);
        break;
    default:
        console.log("Onbekend personage.");
        break;
}

// 5. Logische operator met meerdere voorwaarden
personage = "Marchal"
leeftijd = 32;
if (leeftijd > 30 && beroepen.includes("jurist")) {
    document.getElementById("output").textContent = `${personage} is ouder dan 30 en een jurist.`;
} else {
    document.getElementById("output").textContent = `${personage} heeft geen overeenkomst met deze criteria.`;
}
// Voorbeeldstrings
let tedMosby = "Ted Mosby";
let robinScherbatsky = "Robin Scherbatsky";
let barneyStinson = "Barney Stinson";
let lilyAldrin = "Lily Aldrin";
let marshallEriksen = "Marshall Eriksen";

// .length - Berekent de lengte van een string
console.log(`${tedMosby} heeft ${tedMosby.length} karakters.`); // Output: Ted Mosby heeft 8 karakters.

// .substring() - Geeft een deel van de string terug
let deelNaam = robinScherbatsky.substring(0, 5);
console.log(`Eerste vijf letters van ${robinScherbatsky}:`, deelNaam); // Output: Robin

// .indexOf() - Vindt de positie van een substring binnen een string
let positieStinson = barneyStinson.indexOf("Stinson");
console.log(`"Stinson" begint op index:`, positieStinson); // Output: 7

// .replace() - Vervangt een deel van de string met een andere waarde
let nieuweNaam = lilyAldrin.replace("Lily", "Queen");
console.log(`Nieuwe naam:`, nieuweNaam); // Output: Queen Aldrin

// .repeat() - Herhaalt de string een aantal keer
let dots = ".".repeat(15);
console.log(`Legen wait for it${dots} dary, Legendary!`); 
// Output: Legen wait for it............... dary, Legendary!

// .toUpperCase() en .toLowerCase() - Zet de string in hoofdletters of kleine letters
console.log(`${marshallEriksen} in hoofdletters:`, marshallEriksen.toUpperCase()); // Output: MARSHALL ERIKSEN
console.log(`${marshallEriksen} in kleine letters:`, marshallEriksen.toLowerCase()); // Output: marshall eriksen

// .trim() - Verwijdert spaties aan het begin en einde van de string
let naamMetSpaties = "   Ted Mosby   ";
console.log(`Naam zonder spaties aan de randen:`, naamMetSpaties.trim()); // Output: Ted Mosby
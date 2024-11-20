// Number
let nummer = 42; // Een gewoon nummer
console.log(nummer);
let oneindig = 1 / 0; // Geeft Infinity
let rekenfout = 0 / "tekst"; // Geeft NaN (Not a Number)

console.log("Nummer:", nummer); // Output: 42
console.log("Infinity:", oneindig); // Output: Infinity
console.log("NaN:", rekenfout); // Output: NaN

// String
let naam = "Theodore Evelyn Mosby";
let leeftijd = 46;
let bericht = `Hallo, mijn naam is ${naam} en ik ben ${leeftijd} jaar oud.`; // Template literal

console.log("String:", bericht); // Output: Hallo, mijn naam is Theodore Evelyn Mosby en ik ben 46 jaar oud.

// Boolean
let isVolwassen = leeftijd >= 18; // Geeft true als leeftijd 18 of ouder is

console.log("Boolean:", isVolwassen); // Output: true

// Null
let onbekend = null; // Variabele met geen waarde (leeg)

console.log("Null:", onbekend); // Output: null

// Undefined
let nietGedefinieerd; // Variabele zonder waarde toegewezen

console.log("Undefined:", nietGedefinieerd); // Output: undefined

// Object
let ted = {
    naam: "Theodore Evelyn Mosby",
    leeftijd: 46,
    volwassen: true
};

console.log("Object:", ted); 
// Output: { naam: "Theodore Evelyn Mosby", leeftijd: 46, volwassen: true }

// Array
let getallenLijst = [10, 20, 30, 40]; // Array van nummers

console.log("Array:", getallenLijst); // Output: [10, 20, 30, 40]
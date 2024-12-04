// Arrays = lijst van elementen

const oneToFive = [1,2,3,4,5];
console.log(oneToFive);

const myFriends = ["Monica", "Ross", "Chandler", "Joe", "Phoebie"];
console.log(myFriends);

// Array index
console.log(`My best friend is ${myFriends[2]}`);

// Element toevoegen aan het einde van Array.
myFriends.push("Gunther");
console.log(myFriends);

// Laatste Array element uit array verwijderen.
myFriends.pop()
console.log(myFriends);

// Element toevoegen vooraan Array.
myFriends.unshift("Gunther");
console.log(myFriends);

// Eerste Array element verwijderen.
myFriends.shift();
console.log(myFriends);

const indexOfJoe = myFriends.indexOf("Joe");

console.log(`I have another very good friend, his name is ${myFriends[indexOfJoe]}`);

myFriends.splice(indexOfJoe, 1);
console.log(myFriends);


const wishlist = new Array();
console.log(wishlist);

const product1 = ["Iphone", 899];
const product2 = ["Laptop", 1233];
console.log(product1);
console.log(product2);

wishlist.push(product1);
wishlist.push(product2);
console.log(wishlist);

const priceProduct1 = wishlist[0][1];
console.log(priceProduct1);



// const chandler = "Chandler";
// chandler = "Joe"; // Werkt niet

// myFriends = ["Monica", "Ross", "Chandler", "Joe", "Phoebie"];
// console.log(myFriends);


// Loopen over Array
const getallen = [1,2,3,4,5,6];
let som = 0;

// Methode 1
getallen.forEach(function(getal) {
    som = som + getal;
});
console.log(som);

// Methode 2
for (let i = 0; i < getallen.length; i++) {
    som = som + getallen[i];
}
console.log(som);

// Methode 3
for (getal of getallen) {
    som = som + getal;
}
console.log(som);


// Maak Array aan met namen: Ted, Lily, Marchal, Barney, Robin
// Voeg vervolgens Ranjit toe.
// Op welke index (positie) staat Barney.
// Verwijder Barney uit de Array.
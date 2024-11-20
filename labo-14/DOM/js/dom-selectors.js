// 1. Gebruik van querySelector (selecteert het eerste element met de klasse "title")
let titelElement = document.querySelector(".title");
titelElement.style.color = "purple";
console.log("querySelector:", titelElement); // Output: h1.title

// 2. Gebruik van querySelectorAll (selecteert alle elementen met de klasse "character")
let allePersonages = document.querySelectorAll(".character");
console.log("querySelectorAll:", allePersonages); // Output: NodeList van alle .character elementen
allePersonages[0].style.fontSize = "18px";
allePersonages[0].style.color = "green";
allePersonages[1].style.fontSize = "18px";
allePersonages[1].style.color = "orange";
allePersonages[2].style.fontSize = "18px";
allePersonages[2].style.color = "green";
allePersonages[3].style.fontSize = "18px";
allePersonages[3].style.color = "orange";
allePersonages[4].style.fontSize = "18px";
allePersonages[4].style.color = "green";

// 3. Gebruik van getElementById (selecteert specifiek het element met id "barney")
let barneyElement = document.getElementById("barney");
barneyElement.style.fontWeight = "bold";
console.log("getElementById:", barneyElement); // Output: li#barney

// 4. Gebruik van getElementsByClassName (selecteert alle elementen met de klasse "character")
let characterElements = document.getElementsByClassName("character");
console.log("getElementsByClassName:", characterElements); // Output: HTMLCollection van alle .character elementen
characterElements[0].style.border = "1px solid gray";
characterElements[1].style.border = "1px solid gray";
characterElements[2].style.border = "1px solid gray";
characterElements[3].style.border = "1px solid gray";
characterElements[4].style.border = "1px solid gray";


// 5. Gebruik van getElementsByTagName (selecteert alle <li> elementen in de lijst)
let listItems = document.getElementsByTagName("li");
console.log("getElementsByTagName:", listItems); // Output: HTMLCollection van alle <li> elementen
listItems[0].style.padding = "5px";
listItems[1].style.padding = "5px";
listItems[2].style.padding = "5px";
listItems[3].style.padding = "5px";
listItems[4].style.padding = "5px";
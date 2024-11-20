// Voorbeeld met var (verouderd, gebruik meestal let of const)
var leeftijd = 46;

// Voorbeeld met let
let naam = "Theodore Evelyn Mosby";

// Voorbeeld met const
const geboortedatum = "1978-04-25";

// Function vs. block scoped
function foo() {
    if(true) {
        var character1 = "Robin"      //function scope
        let character2 = "Ted"        //block scope
        const character3 = "Barney"   //block scope
    }
    console.log(character1)  //Robin
    console.log(character2)  //not defined
    console.log(character3) //not defined
}
foo();
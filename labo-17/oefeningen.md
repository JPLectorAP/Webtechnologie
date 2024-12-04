### Oefening 1: Objecten aanmaken
Maak een object `Phoebe` met de eigenschappen:
- `name`: "Phoebe Buffay"
- `age`: 32
- `songs`: ["smelly cat", "sticky shoes"]

---


### Oefening 2: Eigenschappen toevoegen en verwijderen
Maak een object `ross` met de eigenschappen:
- `name`: "Ross Geller"
- `age`: 30
- `job`: "Paleontologist"

1. Voeg een eigenschap `hobby` toe met de waarde "Dinosaurs".
2. Log het aangepaste object.

---


### Oefening 3: Objecten combineren met functies
Maak een functie genaamd `describeCharacter` die een object als parameter accepteert en een beschrijving teruggeeft. Bijvoorbeeld:

```javascript
const chandler = {
  name: "Chandler Bing",
  job: "Statistical Analyst",
  quirk: "uses sarcasm a lot",
};

describeCharacter(chandler);
```

**Output:**  
"Chandler Bing works as a Statistical Analyst and uses sarcasm a lot."

---


### Oefening 4: Functies in objecten (methoden)
Maak een object aan genaamd `joey` met de volgende eigenschappen:
- `name`: "Joey Tribbiani"
- `age`: 25
- `job`: "Actor"
- `catchPhrase`: "How you doin'?"

**Bonus:** Voeg een methode toe genaamd `introduce` die een string logged zoals:  
"Hi, I'm Joey Tribbiani, an Actor. How you doin'?"

---


### Oefening 5: Object keys, values en entries
Maak een object `centralPerk` met de volgende eigenschappen:
- `name`: "Central Perk"
- `location`: "New York"
- `famousFor`: "Coffee and Couch"

1. Gebruik `Object.keys()` om alle eigenschappen van het object te loggen.
2. Gebruik `Object.values()` om alle waarden van het object te loggen.
3. Gebruik `Object.entries()` om het object als een lijst van key-value te loggen.

---


### Oefening 5: Itereren (loopen) over een object
Maak een object `friends` waarin elk personage een eigenschap is en de waarde hun leeftijd. Bijvoorbeeld:
```javascript
const friends = {
  Monica: 30,
  Rachel: 28,
  Joey: 27,
  Chandler: 29,
  Ross: 31,
  Phoebe: 32,
};
```

Itereer over het object en log een string zoals:  
   "Monica is 30 years old."

---


### Oefening 6: Zoek functies
Maak een array van objecten genaamd `episodes`, waarbij elk object een aflevering vertegenwoordigt met eigenschappen zoals:
- `title`: "The One with the Blackout"
- `season`: 1
- `episode`: 7
- `rating`: 8.8

Schrijf functies om:
1. Alle afleveringen met een rating hoger dan 9 te vinden.
2. Afleveringen uit een specifieke seizoen te filteren.
3. De hoogste beoordeling in de lijst te vinden.

---

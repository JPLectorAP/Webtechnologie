const friends = ["Monica", "Rachel", "Joey", "Chandler", "Ross", "Phoebe"];


// .forEach()
friends.forEach((friend, index) => {
  console.log(`${index + 1}. ${friend}`);
});


// .map()
const uppercaseFriends = friends.map(friend => friend.toUpperCase());

console.log(uppercaseFriends);


// .filter()
const episodes = [
    { title: "The One with Ross's Sandwich", rating: 9.2 },
    { title: "The One with the Blackout", rating: 8.8 },
    { title: "The One Where No One's Ready", rating: 9.3 },
    { title: "The One with the Embryos", rating: 9.5 },
  ];
  
const highRatedEpisodes = episodes.filter(episode => episode.rating > 9);

console.log(highRatedEpisodes);


// .sort()
// --- alfabetisch
const sortedFriends = friends.sort();

console.log(sortedFriends);

// --- numeriek
const sortedEpisodes = episodes.sort((a, b) => b.rating - a.rating);

console.log(sortedEpisodes);


// .reduce()
const totalRating = episodes.reduce((total, episode) => total + episode.rating, 0);
const averageRating = totalRating / episodes.length;

console.log(`Total Rating: ${totalRating}`);

console.log(`Average Rating: ${averageRating.toFixed(2)}`);
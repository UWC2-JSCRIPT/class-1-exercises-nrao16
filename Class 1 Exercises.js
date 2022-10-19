/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

const SMALL_PIZZA_DIAMETER = 13;
const LARGE_PIZZA_DIAMETER = 17;
const smallPizzaArea = Math.PI * ((SMALL_PIZZA_DIAMETER/2) ** 2);
console.log(`smallPizzaArea: ${smallPizzaArea}`);

const largePizzaArea = Math.PI * ((LARGE_PIZZA_DIAMETER/2) ** 2);
console. log(`largePizzaArea: ${largePizzaArea}`);

// 2. What is the cost per square inch of each pizza?


// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

const TOP_CARD = 13;
const card = Math.ceil(Math.random() * TOP_CARD);
console.log(`You drew card:${card}`);

// 4. Draw 3 cards and use Math to determine the highest
// card
const card1 = Math.ceil(Math.random() * TOP_CARD);
console.log(`card1:${card1}`);
const card2 = Math.ceil(Math.random() * TOP_CARD);
console.log(`card2:${card2}`);
const card3 = Math.ceil(Math.random() * TOP_CARD);
console.log(`card3: ${card3}`);
const maxCard = Math.max(card1, card2, card3);
console.log(`Highest card:${maxCard}`);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const endDate = new Date(2019, 3, 1);

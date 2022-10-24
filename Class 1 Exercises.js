/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

const SMALL_PIZZA_DIAMETER = 13;
const LARGE_PIZZA_DIAMETER = 17;
const smallPizzaArea = Math.PI * ((SMALL_PIZZA_DIAMETER / 2) ** 2);
console.log(`smallPizzaArea: ${smallPizzaArea}`);

const largePizzaArea = Math.PI * ((LARGE_PIZZA_DIAMETER / 2) ** 2);
console.log(`largePizzaArea: ${largePizzaArea}`);

// 2. What is the cost per square inch of each pizza?
const smallPizzaPrice = 16.99;
const largePizzaPrice = 19.99;
const costPerSqInchSmall = smallPizzaPrice/smallPizzaArea;
const costPerSqInchLarge = largePizzaPrice/largePizzaArea;
console.log(`Pagliacci charges $${Number.parseFloat(costPerSqInchSmall).toFixed(2)} per sq.inch for a small pizza`);
console.log(`Pagliacci charges $${Number.parseFloat(costPerSqInchLarge).toFixed(2)} per sq.inch for a large pizza`);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

const TOP_CARD = 13;

const cardMap = new Map([
    [1, "Ace"],
    [11, "Jack"],
    [12, "Queen"],
    [13, "King"]
  ]);
const card = Math.ceil(Math.random() * TOP_CARD);

cardMap.get(card) ? console.log(`You drew ${cardMap.get(card)}`) : console.log(`You drew ${card}`);

// 4. Draw 3 cards and use Math to determine the highest
// card
const card1 = Math.ceil(Math.random() * TOP_CARD);
cardMap.get(card1) ? console.log(`You drew ${cardMap.get(card1)}`) : console.log(`You drew ${card1}`);
const card2 = Math.ceil(Math.random() * TOP_CARD);
cardMap.get(card2) ? console.log(`You drew ${cardMap.get(card2)}`) : console.log(`You drew ${card2}`);
const card3 = Math.ceil(Math.random() * TOP_CARD);
cardMap.get(card3) ? console.log(`You drew ${cardMap.get(card3)}`) : console.log(`You drew ${card3}`);
const maxCard = Math.max(card1, card2, card3);
cardMap.get(maxCard) ? console.log(`The max card you drew was ${cardMap.get(maxCard)}`) : console.log(`The max card you drew was ${maxCard}`);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

const firstName = 'Jill';
const lastName = 'Smith';
const streetAddress = '1 Pine Street'
const city = 'Seattle'
const state = 'WA'
const zipCode = '98101'
const address = `${firstName} ${lastName}
${streetAddress}
${city}, ${state} ${zipCode}`;

console.log(address);

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
const addressFirstName = address?.substring(0, address?.indexOf(' '));
console.log(`Hi ${addressFirstName}`)

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const endDate = new Date(2020, 3, 1);
const endDateTime = endDate.getTime();
const startDate = new Date(2020, 0, 1);
const startDateTime = startDate.getTime();
const midDateTime = (endDateTime - startDateTime)/2
const middleDate = new Date(startDateTime + midDateTime);
console.log(`startDate:${startDate}
endDate: ${endDate}
middleDate: ${middleDate}`);

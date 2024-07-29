const { fishMenu } = require("./restaurant.js")
const { mongerInventory } = require("./fishMonger.js")

const dailyPriceLimit = 3.99
const menu = fishMenu(dailyPriceLimit)

console.log(menu)

const cheapest = mongerInventory()

for (const fish of cheapest) {
     console.log(`The cheapest fist are ${fish}`)
}

/*
const dailyPriceLimit = 3.99;
const menu = fishMenu(dailyPriceLimit);
console.log("Menu with meals:");
console.log(menu);
*/
/*
console.log("Remaining boat inventory:");
console.log(boatInventory);
*/

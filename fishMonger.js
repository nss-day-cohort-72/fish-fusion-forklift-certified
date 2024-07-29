//We know that we will be making a function
// The exported function must be named mongerInventory

/* We are going to loop through the array looking for fish that have a quantity above 10
and price below $7.50 */

const { functionVariable, fishingBoat, boatInventory } = require("./fishingBoat.js")


/* We need to loop through our array cheapestFish and find the fish less than or equal to 
the number 5.00 */


const mongerInventory = (fishingBoat) => {
    const cheapestFish = []
    let lowPrice = 7.50
    for (const fish of boatInventory) {
        if(fish.price <= lowPrice || fish.amount >= 10) {
            cheapestFish.push(fish.species)
        }
    }
    chefsFish = []
    const chefsBudget = 5.00
    for (const fish of cheapestFish) {
        if(fish.price <= chefsBudget) {
            chefsFish.push(fish.species)
        }
    }
    return chefsFish
}

module.exports = { mongerInventory }

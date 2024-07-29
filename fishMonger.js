//We know that we will be making a function
// The exported function must be named mongerInventory
/* We are going to loop through the array looking for fish that have a quantity above 10
and price below $7.50 */
const { boatInventory } = require("./fishingBoat.js")
/* We need to loop through our array cheapestFish and find the fish less than or equal to
the number 5.00 */
const mongerInventory = (boatInventory, chefsBudget) => {
    const eligibleFish = boatInventory.filter(fish =>
        fish.price <= 7.50 || fish.amount >= 10
    );
    const availableFish = eligibleFish.filter(fish =>
        fish.price <= chefsBudget
    );
    for (const fish of availableFish) {
        const index = boatInventory.findIndex(b => b.species === fish.species);
        if (index !== -1) {
            const amountToPurchase = Math.ceil(boatInventory[index].amount * 0.50);
            boatInventory[index].amount -= amountToPurchase;
            if (boatInventory[index].amount <= 0) {
                boatInventory.splice(index, 1);
            }
        }
    }
    return availableFish.map(fish => fish.species);
};
module.exports = { mongerInventory }
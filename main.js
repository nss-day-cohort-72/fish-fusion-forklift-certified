const { fishMenu } = require("./restaurant.js")
const { mongerInventory } = require("./fishMonger.js")


const dailyPriceLimit = 8.01;
const menu = fishMenu(dailyPriceLimit);
console.log("Menu with meals:");
console.log(menu);


//console.log("Remaining boat inventory:");
//console.log(boatInventory);






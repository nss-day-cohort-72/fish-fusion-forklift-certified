const { fishMenu } = require("./restaurant.js")
const { mongerInventory } = require("./fishMonger.js")

const dailyPriceLimit = 3.99
const menu = fishMenu(dailyPriceLimit)
console.log(menu)

const cheapest = mongerInventory()
for (const fish of cheapest) {
     console.log(`The cheapest fist are ${fish}`)
}


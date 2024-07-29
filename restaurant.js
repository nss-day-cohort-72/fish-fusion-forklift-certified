const { mongerInventory } = require("./fishMonger.js")
/* We need to import and invoke the function that is exported by the fishMonger module.
This module should also define a function that builds an HTML version of their daily menu.
The function should return the generated HTML string and must be named fishMenu. */
const createMeals = (fishSpecies) => {
  let html = '<h1>Menu</h1>';
  for (const species of fishSpecies) {
      html += `
          <article class="menu">
              <h2>${species}</h2>
              <section class="menu__item">${species} Soup</section>
              <section class="menu__item">${species} Sandwich</section>
              <section class="menu__item">Grilled ${species}</section>
          </article>
      `;
  }
  return html;
};
const fishMenu = (dailyPriceLimit) => {
  const purchasedFish = mongerInventory(boatInventory, dailyPriceLimit)
  return createMeals(purchasedFish)
}
module.exports = { fishMenu }
import { animals } from "./animals.js";
const cardContainer = document.getElementById("card-container-id");
console.log(cardContainer);
console.log(animals[0]);
const makeCards = () => {

}
// I chose to use let here because I have to add to the value to build the cards
let cardConstructor = ``;
for (let i = 0; i < animals.length; i++) {
    cardConstructor += `<div class="card">
              <img src="${animals[i].image}" alt="${animals[i].title}" />
              <div class="card-text">
                <h3>${animals[i].title}</h3>
                <p>${animals[i].description}
                </p>
              </div>
            </div>`;
}
cardContainer.innerHTML = cardConstructor;
const s = window.location.href;
const a = s.split("%20");
console.log(a);
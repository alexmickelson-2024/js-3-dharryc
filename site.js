import { animals } from "./animals.js"; //getting the animals array
const cardContainer = document.getElementById("card-container-id"); //getting the card container node

//pulling filterwords from the url
function getWords() {
  const s = window.location.href;
  if (s.includes("filter=")) {
    const array = s.split("?");
    const mediaArray = array[1].split("&");
    let filters = mediaArray.find((media) => {
      return media.includes("filter=");
    });
    const filterWords = filters.split("=")[1];
    return filterWords;
  } else {
    return "";
  }
}
//returning them as individual words
let filterWords = getWords().split("%20");
for (let i = 0; i < filterWords.length; i++) {
  filterWords[i] = filterWords[i].toLowerCase();
}
console.log(filterWords);

function checkFilters(card) {
  if(filterWords.length > 0){
    for (let i = 0; i < filterWords.length; i++) {
      if(card.description.toLowerCase().includes(filterWords[i])) return true;
    }
  } else return false;
}


// building the actual cards
// I chose to use let here because I have to add to the value to build the cards
let cardConstructor = ``;
for (let i = 0; i < animals.length; i++) {
  if (checkFilters(animals[i])) {

    cardConstructor += `<div class="card">
    <img src="${animals[i].image}" alt="${animals[i].title}" />
    <div class="card-text">
    <h3>${animals[i].title}</h3>
    <p>${animals[i].description}
    </p>
    </div>
    </div>`;
  }
}
cardContainer.innerHTML = cardConstructor;
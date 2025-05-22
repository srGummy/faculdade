
const cards = [
  "bulbasaur", "charmander", "squirtle", "pikachu",
  "eevee", "jigglypuff", "meowth", "psyduck"
];

let cardArray = [...cards, ...cards];
cardArray.sort(() => 0.5 - Math.random());

const gameBoard = document.getElementById("gameBoard");

let flippedCards = [];
let lockBoard = false;

cardArray.forEach(name => {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.name = name;

  const inner = document.createElement("div");
  inner.className = "card-inner";

  const front = document.createElement("div");
  front.className = "card-front";

  const back = document.createElement("div");
  back.className = "card-back";
  const img = document.createElement("img");
  img.src = `img/${name}.png`;
  img.style.width = "100%";
  img.style.height = "100%";
  back.appendChild(img);

  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);

  card.addEventListener("click", () => {
    if (lockBoard || card.classList.contains("flip")) return;

    card.classList.add("flip");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      lockBoard = true;
      const [first, second] = flippedCards;

      if (first.dataset.name === second.dataset.name) {
        flippedCards = [];
        lockBoard = false;
      } else {
        setTimeout(() => {
          first.classList.remove("flip");
          second.classList.remove("flip");
          flippedCards = [];
          lockBoard = false;
        }, 1000);
      }
    }
  });

  gameBoard.appendChild(card);
});

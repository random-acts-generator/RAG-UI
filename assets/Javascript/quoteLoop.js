const quotesArray = [
  {
    text:
      "Together we can change the world, just one random act of kindess at a time.",
    author: "Ron Hall"
  },
  {
    text:
      "For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.",
    author: "Audrey Hepburn"
  },
  {
    text: "No act of kindness, no matter how small, is ever wasted.",
    author: "Aesop"
  },
  {
    text:
      "Kindess is the language which the deaf can hear and the blind can see.",
    author: "Marc Twain"
  },
  {
    text:
      "Kindness and faithfulness keep a king safe, through kindness his throne is made secure. ",
    author: "King Solomon"
  },
  {
    text:
      "This is my simple religion. There is no need for temples; no need for complicated philosophy. Our own brain, our own heart is our temple; the philosophy is kindness. ",
    author: "Dalai Lama"
  },
  {
    text:
      "Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.",
    author: "Lao Tzu"
  },
  {
    text:
      "Human kindness has never weakened the stamina or softened the fiber of a free people. A nation does not have to be cruel to be tough.",
    author: "Franklin D. Roosevelt"
  },
  {
    text:
      "You can tell by the kindness of a dog how a human should be.",
    author: "Captain Beefhart"
  },
  {
    text:
      "Whatever possession we gain by our sword cannot be sure or lasting, but the love gained by kindness and moderation is certain and durable.",
    author: "Alexander the Great"
  },
  {
    text:
      "A tree is known by its fruit; a man by his deeds. A good deed is never lost; he who sows courtesy reaps friendship, and he who plants kindness gathers love.",
    author: "Saint Basil"
  },
];


const quote = document.querySelector(".quote i");
const author = document.querySelector(".author");
const quoteWrap = document.querySelector(".quote");
let index = 0;


function updateQuote(array) {
  setInterval(() => {
    if (index === array.length - 1) {
      index = 0;
    }
    ++index;
    quote.textContent = `"${array[index].text}"`;
    author.textContent = array[index].author;
  }, 9000)
}

updateQuote(quotesArray);
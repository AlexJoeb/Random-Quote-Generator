/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

const quoteBox  = document.getElementById("quote-box");
const quote     = document.getElementsByClassName("quote")[0];
const source    = document.getElementsByClassName("source")[0];
const citation  = document.getElementsByClassName("citation")[0];
const year      = document.getElementsByClassName("year")[0];
const reload    = document.getElementById("loadQuote");

// List of Quotes
let quotes = [
  {
    quote: "Bears. Beets. Battlestar Galactica.",
    source: "Jim Halpert",
    citation: "Dunder Mifflin Paper Company",
    year: 2005,
    color: '#74d2e7',
    category: ["Funny"],
  },
  {
    quote: "Well, if droids could think, there’d be none of us here, would there?",
    source: "Obi-Wan Kenobi",
    citation: "Jedi Counsel",
    year: 1977,
    color: "#009f4d",
    category: ["Technology"],
  },
  {
    quote: "Where there’s life there’s hope.. and need of vittles.",
    source: "J.R.R. Tolkien",
    citation: "The Lord of the Rings",
    year: 2001,
    color: "#ff9933",
    category: ["Food"],
  },
  {
    quote: "I’m your density. I mean, your destiny.",
    source: "George McFly",
    ciation: "Back to the Future",
    color: "#8e43e7",
    category: ["Wholesome"]
  },
  {
    quote: "We're all pretty bizarre. Some of us are just better at hiding it, that's all.",
    source: "Andrew Clark",
    citation: "The Breakfast Club",
    color: "#ce181e",
    category: ["Bizzare"]
  },

];


// Retrieve a random quote from the array quote array.
const getRandomQuote = () => {
  let rand = Math.floor((Math.random() * 5)); // Generate random number 1-5
  return quotes[rand];
}

const printQuote = () => {
  const quoteObj = getRandomQuote();

  // Varaiables for each part of the quote.
  const q       = quoteObj.quote || "";
  const source  = quoteObj.source || "";
  const cite    = quoteObj.citation || "";
  const year    = quoteObj.year || "";
  const cat     = quoteObj.category || [];

  // Quote HTML Template
  const html = `
    <p class="quote">${q}</p>
    <p class="source">
      ${source}${cite != "" ? `<span class="citation">${cite}</span>` : ""}
      ${year != "" ? `<span class="year">${year}</span>` : ""}
      |
      ${cat.length != 0 ? `<ul id="categories"></ul>` : ""}
    </p>`;

  
  // Changing the background color of the screen and "new quote" button.
  document.body.style.backgroundColor = quoteObj.color;
  reload.style.backgroundColor = quoteObj.color;

  quoteBox.innerHTML = html;

  // For Each catergory, add it to the page.
  cat.forEach(c => {
    document.getElementById("categories").innerHTML += `<li>${c}</li>`;
  });
}

// Button listener for "new quote" button.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
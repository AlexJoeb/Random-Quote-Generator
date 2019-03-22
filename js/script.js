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

let quotes = [
  {
    quote: "Bears. Beets. Battlestar Galactica.",
    source: "Jim Halpert",
    citation: "Dunder Mifflin Paper Company",
    year: 2005,
    color: '#74d2e7',
  },
  {
    quote: "Well, if droids could think, there’d be none of us here, would there?",
    source: "Obi-Wan Kenobi",
    citation: "Jedi Counsel",
    year: 1977,
    color: "#009f4d"
  },
  {
    quote: "Where there’s life there’s hope.. and need of vittles.",
    source: "J.R.R. Tolkien",
    citation: "The Lord of the Rings",
    year: 2001,
    color: "#ff9933"
  },
  {
    quote: "I’m your density. I mean, your destiny.",
    source: "George McFly",
    ciation: "Back to the Future",
    color: "#8e43e7"
  },
  {
    quote: "We're all pretty bizarre. Some of us are just better at hiding it, that's all.",
    source: "Andrew Clark",
    citation: "The Breakfast Club",
    color: "#ce181e",
  },

];

const getRandomQuote = () => {
  let rand = Math.floor((Math.random() * 5));
  return quotes[rand];
}

const printQuote = () => {
  const quoteObj = getRandomQuote();

  const q       = quoteObj.quote || "";
  const source  = quoteObj.source || "";
  const cite    = quoteObj.citation || "";
  const year    = quoteObj.year || "";

  const html = `
    <p class="quote">${q}</p>
    <p class="source">
      ${source}${cite != "" ? `<span class="citation">${cite}</span>` : ""}
      ${year != "" ? `<span class="year">${year}</span>` : ""}
    </p>`;

  document.body.style.backgroundColor = quoteObj.color;
  reload.style.backgroundColor = quoteObj.color;

  quoteBox.innerHTML = html;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
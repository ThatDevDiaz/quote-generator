`use strict`;

// declaring variables

const quoteButton = document.getElementById(`quoteButton`);

let newQuote = document.getElementById(`apiQuote`);
let quoteNumber = document.getElementById(`adviceNumber`);

// fetch quote function

function fetchQuote() {
  fetch("https://type.fit/api/quotes")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.length);
      function generatedQuoteText() {
        return data[randomIndex].text;
      }

      newQuote.innerHTML = `"${generatedQuoteText()}"`;
      quoteNumber.textContent = `#${randomIndex + 1}`;
    });
}

// generate quote event

quoteButton.addEventListener(`click`, function () {
  fetchQuote();
});

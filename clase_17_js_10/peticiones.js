// Peticion FETCH

// fetch es un tipo de funcion ASINCRONICA

const $quotes = document.querySelector(".quotes");

fetch("https://api.breakingbadquotes.xyz/v1/quotes/5")
  .then((response) => response.json())
  .then((quotes) => {
        quotes.forEach(quote => {
            const $quote = document.createElement('div');
            $quote.className = "quote"
            $quote.innerHTML = `
                <p>${quote.quote}<p>
                <h3>${quote.author}</h3>
            `;
            $quotes.appendChild($quote);
        })
  });

let currentIndex = 0;
const quotes = document.querySelectorAll('.quote-bubble');
const totalQuotes = quotes.length;

function changeQuote() {
  // Remove active class from all quotes
  quotes.forEach(quote => {
    quote.classList.remove('active');
  });

  // Add active class to the current quote
  quotes[currentIndex].classList.add('active');

  // Update the index for the next quote
  currentIndex = (currentIndex + 1) % totalQuotes;
}

// Initially show the first quote
changeQuote();

// Change quotes every 5 seconds
setInterval(changeQuote, 5000);

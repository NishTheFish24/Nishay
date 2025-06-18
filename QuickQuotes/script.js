const quotes = [
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "The best way out is always through.", author: "Robert Frost" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "Keep going. Be all in.", author: "Bryan Hutchinson" }
];

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote");

function displayQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = `"${random.text}"`;
  quoteAuthor.textContent = `– ${random.author}`;
}

newQuoteBtn.addEventListener("click", displayQuote);
window.onload = displayQuote;

const library = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    author: 'Patrick Bet-David and Greg Dinkin',
    about: 'A book on how to plan ahead',
    pages: 320,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    about: 'A practical book about discarding bad habits and building good ones',
    pages: 320,
  },
  {
    title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    author: 'Patrick Bet-David',
    about: 'A book that emphasizes the importance of identifying and understanding adversaries',
    pages: 304,
  },
  {
    title: 'The Embedded Entrepreneur',
    author: 'Arvid Kahl',
    about: 'A book focusing on how to build an audience-driven business',
    pages: 308,
  },
  {
    title: 'How to Be a Coffee Bean',
    author: 'Jon Gordon',
    about: 'A book about effective ways to lead a coffee bean lifestyle',
    pages: 256,
  },
  {
    title: 'The Creative Mindset',
    author: 'Jeff DeGraff and Staney DeGraff',
    about: 'A book on how to develop creativity and innovation skills',
    pages: 168,
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki and Sharon Lechter',
    about: 'A book about financial literacy and building wealth',
    pages: 336,
  },
  {
    title: 'Zero to Sold',
    author: 'Arvid Kahl',
    about: 'A book on how to bootstrap a business',
    pages: 500,
  },
];

function getBooksByAuthor(catalog, author) {
  return catalog.filter(book => book.author === author);
}

function getTotalPages(catalog) {
  return catalog.reduce((total, book) => total + book.pages, 0);
}
const input = document.getElementById("searchInput");
const button = document.getElementById("searchBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const searchText = input.value.toLowerCase();

  const foundBooks = library.filter(book =>
    book.title.toLowerCase().includes(searchText)
  );

  if (foundBooks.length === 0) {
    result.innerHTML = "Nenhum livro encontrado";
    return;
  }

  result.innerHTML = foundBooks
    .map(book => `
      <div>
        <h3>${book.title}</h3>
        <p>${book.author}</p>
      </div>
    `)
    .join("");
});

// Livros
document.getElementById("books").innerHTML =
  library.map(book => `
    <div class="book">
      <strong>${book.title}</strong>
      <div class="author">${book.author}</div>
    </div>
  `).join("");

// Resumos
document.getElementById("summaries").innerHTML =
  library.map(book => `
    <div class="book">
      <strong>${book.title}</strong>
      <p>${book.about}</p>
    </div>
  `).join("");

// Arvid Kahl
document.getElementById("arvid").innerHTML =
  getBooksByAuthor(library, "Arvid Kahl")
  .map(book => `
    <div class="book">
      <strong>${book.title}</strong>
    </div>
  `).join("");

// James Clear
document.getElementById("james").innerHTML =
  getBooksByAuthor(library, "James Clear")
  .map(book => `
    <div class="book">
      <strong>${book.title}</strong>
    </div>
  `).join("");

// Total de páginas
document.getElementById("pages").innerHTML =
  `<div class="total-pages">${getTotalPages(library)} páginas</div>`;
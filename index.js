const filmList = document.getElementById('film-list');
const titleElement = document.getElementById('title');
const posterElement = document.getElementById('film-menu');
const runtimeElement = document.getElementById('runtime');
const showtimeElement = document.getElementById('showtime');
const ticketsElement = document.getElementById('available-tickets');
const sellButton = document.getElementById('sell');

fetch('http://localhost:3000/films')
  .then(res => res.json())
  .then(renderFilms);

  function renderFilmDetails(film) {
    titleElement.textContent = `Film Title: ${film.title}`;
    posterElement.src = film.poster;
    runtimeElement.textContent = `Runtime: ${film.runtime} min`;
    showtimeElement.textContent = `Showtime: ${film.showtime}`;
    ticketsElement.textContent = `Available Tickets: ${film.capacity - film.tickets_sold}`;
  
    sellButton.addEventListener('click', () => {
      if (film.tickets_sold < film.capacity) {
        film.tickets_sold++;
        ticketsElement.textContent = `Available Tickets: ${film.capacity - film.tickets_sold}`;
      } else {
        alert('Sorry, this film is sold out!');
      }
    });
  }
  

function renderFilms(films) {
  films.forEach(film => {
    const li = document.createElement('li');
    li.textContent = film.title;
    li.addEventListener('click', () => renderFilmDetails(film));
    filmList.appendChild(li);
  });
}





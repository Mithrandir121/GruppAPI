import './style.css'



movies.forEach ((movies => {

  createHtml (movie);

const movieDiv = document.createElement('div');
const movieTitle = document.createElement('h2');
const movieYear = document.createElement('p');
const movieDirector = document.createElement('p');
const movieGenre = document.createElement('p');
const movieRating = document.createElement('p');
const movieDescription = document.createElement('p');
const moviePoster = document.createElement('img');

movieTitle.textContent = movie.title;
movieYear.textContent = `Year: ${movie.year}`;
movieDirector.textContent = `Director: ${movie.director}`;
movieGenre.textContent = `Genre: ${movie.genre}`;
movieRating.textContent = `Rating: ${movie.rating}`;
movieDescription.textContent = movie.description;
moviePoster.src = movie.poster;
moviePoster.alt = `${movie.title} Poster`;

movieDiv.appendChild(movieTitle);
movieDiv.appendChild(movieYear);
movieDiv.appendChild(movieDirector);
movieDiv.appendChild(movieGenre);
movieDiv.appendChild(movieRating);
movieDiv.appendChild(movieDescription);
movieDiv.appendChild(moviePoster);

document.body.appendChild(movieDiv);
  
});

function createHtml (movie) {
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie');
  movieElement.textContent = movie.title;
  document.body.appendChild(movieElement);
}

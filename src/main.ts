<<<<<<< HEAD
﻿import type { omdbResponse } from './models/omdbResponse';
import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';

// Small helper to fetch movies from OMDB
const getMovies = async (query = 'harry') => {
  const response = await fetch(
    `https://omdbapi.com/?apikey=416ed51a&s=${encodeURIComponent(query)}`
  );
  const data: omdbResponse = await response.json();
  const movies = data?.Search;
  console.log('OMDB search results for', query, movies);
  return movies;
};

// Search form handler (if present in your HTML)
document.getElementById('searchForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const theInput = document.getElementById('searchText');
  let searchText = '';
  if (theInput) {
    searchText = (theInput as HTMLInputElement).value;
  }

  // clear input
  (document.getElementById('searchText') as HTMLInputElement).value = '';

  if (searchText.trim()) {
    await getMovies(searchText.trim());
  }
});

// Vite + TypeScript demo app content
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
=======
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
>>>>>>> createHtml

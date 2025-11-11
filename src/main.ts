import type { omdbResponse } from './models/omdbResponse';
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

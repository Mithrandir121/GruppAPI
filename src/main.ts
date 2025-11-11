import type { omdbResponse } from './models/omdbResponse';
import './style.css'


const getMovies = async ()=>{
  const response = await fetch("https://omdbapi.com/?apikey=416ed51a&s=harry");
  const data: omdbResponse =await response.json();

  const movies=data.Search;
  console.log(movies);
}
getMovies();
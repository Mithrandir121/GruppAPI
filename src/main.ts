
document.getElementById("searchForm")?.addEventListener("submit",async (e)=>{
  e.preventDefault();

  const theInput=document.getElementById("searchText");

  let searchText="";
  if (theInput){
    searchText=(theInput as HTMLInputElement).value;
  }



  (document.getElementById("searchText")as HTMLInputElement).value="";
});
import type { omdbResponse } from './models/omdbResponse';
import './style.css'


const getMovies = async ()=>{
  const response = await fetch("https://omdbapi.com/?apikey=416ed51a&s=harry");
  const data: omdbResponse =await response.json();

  const movies=data.Search;
  console.log(movies);
}
getMovies();

import type { Movie } from "./Movie";

export type omdbResponse ={

  totalResults:string;
  Response:string;
  Search: Movie[];


}
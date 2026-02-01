import { of } from "rxjs";

export const movie = {
  title: "The Shawshank Redemption",
  year: "1994",
  rated: "R",
  released: "14 Oct 1994",
  runtime: "142 min",
  genre: "Drama",
  director: "Frank Darabont",
  writer: "Stephen King, Frank Darabont",
  actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
  plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  language: "English",
  country: "United States",
  awards: "Nominated for 7 Oscars. 21 wins & 43 nominations total",
  poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  ratings: [
    {
      source: "Internet Movie Database",
      value: "9.3/10"
    },
    {
      source: "Rotten Tomatoes",
      value: "91%"
    },
    {
      source: "Metacritic",
      value: "81/100"
    }
  ],
  metascore: "81",
  imdbRating: "9.3",
  imdbVotes: "2,559,562",
  imdbId: "tt0111161",
  type: "movie",
  dvd: "21 Dec 1999",
  boxOffice: "$28,767,189",
  production: "N/A",
  website: "N/A",
  response: "True"
}


export const movies = [
    {
      title: "The Shawshank Redemption",
      year: "1994",
      rated: "R",
      released: "14 Oct 1994",
      runtime: "142 min",
      genre: "Drama",
      director: "Frank Darabont",
      writer: "Stephen King, Frank Darabont",
      actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
      plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      language: "English",
      country: "United States",
      awards: "Nominated for 7 Oscars. 21 wins & 43 nominations total",
      poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      ratings: [
        {
          source: "Internet Movie Database",
          value: "9.3/10"
        },
        {
          source: "Rotten Tomatoes",
          value: "91%"
        },
        {
          source: "Metacritic",
          value: "81/100"
        }
      ],
      metascore: "81",
      imdbRating: "9.3",
      imdbVotes: "2,559,562",
      imdbId: "tt0111161",
      type: "movie",
      dvd: "21 Dec 1999",
      boxOffice: "$28,767,189",
      production: "N/A",
      website: "N/A",
      response: "True"
    },
    {
      title: "The Godfather",
      year: "1972",
      rated: "R",
      released: "24 Mar 1972",
      runtime: "175 min",
      genre: "Crime, Drama",
      director: "Francis Ford Coppola",
      writer: "Mario Puzo, Francis Ford Coppola",
      actors: "Marlon Brando, Al Pacino, James Caan",
      plot: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      language: "English, Italian, Latin",
      country: "United States",
      awards: "Won 3 Oscars. 31 wins & 30 nominations total",
      poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      ratings: [
        {
          source: "Internet Movie Database",
          value: "9.2/10"
        },
        {
          source: "Rotten Tomatoes",
          value: "97%"
        },
        {
          source: "Metacritic",
          value: "100/100"
        }
      ],
      metascore: "100",
      imdbRating: "9.2",
      imdbVotes: "1,765,414",
      imdbId: "tt0068646",
      type: "movie",
      dvd: "11 May 2004",
      boxOffice: "$136,381,073",
      production: "N/A",
      website: "N/A",
      response: "True"
    },
    {
      title: "The Dark Knight",
      year: "2008",
      rated: "PG-13",
      released: "18 Jul 2008",
      runtime: "152 min",
      genre: "Action, Crime, Drama",
      director: "Christopher Nolan",
      writer: "Jonathan Nolan, Christopher Nolan, David S. Goyer",
      actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
      plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      language: "English, Mandarin",
      country: "United States, United Kingdom",
      awards: "Won 2 Oscars. 159 wins & 163 nominations total",
      poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      ratings: [
        {
          source: "Internet Movie Database",
          value: "9.1/10"
        },
        {
          source: "Rotten Tomatoes",
          value: "94%"
        },
        {
          source: "Metacritic",
          value: "84/100"
        }
      ],
      metascore: "84",
      imdbRating: "9.1",
      imdbVotes: "2,528,462",
      imdbId: "tt0468569",
      type: "movie",
      dvd: "09 Dec 2008",
      boxOffice: "$534,987,076",
      production: "N/A",
      website: "N/A",
      response: "True"
    }
  ];

  export class  mockMovieService  {
    public get() { return of(movies) } // or any mock implementation
}
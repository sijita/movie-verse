import axios from "@/utils/axios";

export const fetchRandomMovie = async () => {
  const fetchRandomMovie = await axios.get(
    "/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc&year=2024"
  );

  const randomMovie = fetchRandomMovie.data.results;
  const randomIndex = Math.floor(Math.random() * randomMovie.length);
  const movie = randomMovie[randomIndex];

  return movie;
};

export const fetchMoviesCategories = async () => {
  const fetchCategories = await axios.get("/genre/movie/list?language=es-ES");
  const categories = fetchCategories.data.genres.slice(0, 5);

  return categories;
};

export const fetchTopRatedMovies = async () => {
  const fetchTopRatedMovies = await axios.get(
    "/movie/top_rated?language=es-ES&page=1"
  );
  const topRatedMovies = fetchTopRatedMovies.data.results;

  return topRatedMovies;
};

export const fetchUpcomingMovies = async () => {
  const fetchUpcomingMovies = await axios.get(
    "/movie/upcoming?language=es-ES&page=1"
  );
  const upcomingMovies = fetchUpcomingMovies.data.results;

  return upcomingMovies;
};

export const fetchMovieDetails = async (id: string) => {
  const fetchMovieDetails = await axios.get(`/movie/${id}?language=es-ES`);
  const movie = fetchMovieDetails.data;

  return movie;
};

export const fetchMoviesByCategory = async (id: string) => {
  const fetchMoviesByCategory = await axios.get(
    `/discover/movie?with_genres=${id}&language=es-ES`
  );
  const movies = fetchMoviesByCategory.data.results;

  return movies;
};

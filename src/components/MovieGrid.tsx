import { SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export interface Movie {
  id: number;
  poster_path: string;
  title: string;
  tagline: string;
  release_date: string;
}

interface ApiResponse {
  results: Movie[];
}

const MovieGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<ApiResponse>(
        "https://api.themoviedb.org/3/discover/movie?api_key=6aba04cd50ebb345ca1615aef4874d00"
      )
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data);
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {error && <Text>Error: {error}</Text>}

      <SimpleGrid columns={3} spacing={10}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movies={movie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;

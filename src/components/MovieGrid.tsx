import { Image, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import favorite from "../assets/Favorite.png";

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
      .get<ApiResponse>("https://api.themoviedb.org/3/discover/movie", {
        params: {
          api_key: "6aba04cd50ebb345ca1615aef4874d00",
          page: 1,
        },
      })
      .then((response) => {
        setMovies(response.data.results.slice(0, 10));
        console.log(response.data);
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {error && <Text>Error: {error}</Text>}
      <Text fontSize="2xl" fontWeight="700" ml={20} mt={10}>
        Featured Movies
      </Text>
      <SimpleGrid columns={4} spacing={10} px={20} py={10}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movies={movie}
            children={<Image src={favorite} />}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;

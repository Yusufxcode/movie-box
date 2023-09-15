import { Image, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import favorite from "../assets/Favorite.png";
import 

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
        "https://api.themoviedb.org/3/movie/top_rated?api_key=6aba04cd50ebb345ca1615aef4874d00"
      )
      .then((response) => {
        setMovies(response.data.results.slice(0, 10));
        console.log(response.data);
      })
      .catch((error) => setError(error.message));
  }, []);

  function changeLikeButton() {

  }

  return (
    <>
      {error && (
        <Text align="center" fontSize={10} color="red">
          Error: {error}
        </Text>
      )}
      <Text fontSize="2xl" fontWeight="700" ml={20} mt={10}>
        Featured Movies
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        px={20}
        py={10}
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movies={movie}
            children={
              <Image
                onClick={() => changeLikeButton()}
                position="absolute"
                top={10}
                right={10}
                src={favorite}
              />
            }
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;

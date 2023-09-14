import { Card, CardBody, Text, Image, Box } from "@chakra-ui/react";
import { Movie } from "./MovieGrid";

interface Props {
  movies: Movie;
  children: React.ReactNode;
}
const MovieCard = ({ movies, children }: Props) => {
  return (
    <Card
      data-testid="movie-card"
      boxShadow="2xl"
      p="6"
      rounded="md"
      bg="white"
    >
      <Box>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
          alt={movies.title}
          data-testid="movie-poster"
        />
        {children}
      </Box>
      <CardBody>
        <Text data-testid="movie-release-date" fontSize="small">
          {movies.release_date}
        </Text>
        <Text data-testid="movie-title" fontWeight="bold">
          {movies.title}
        </Text>
      </CardBody>
    </Card>
  );
};

export default MovieCard;

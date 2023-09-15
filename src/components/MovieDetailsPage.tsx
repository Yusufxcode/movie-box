import { Box, Image, Text, VStack } from "@chakra-ui/react";
import trailer from "../assets/trailerImage.png";
import { Movie } from "./MovieGrid";

interface Props {
  movieDetails: Movie;
}

const MovieDetailsPage = ({ movieDetails }: Props) => {
  const UTCDate = new Date();
  let UTC = UTCDate.toUTCString();
  return (
    <Box>
      <Image src={trailer} />
      <VStack>
        <Text data-testid="movie-title">{movieDetails.title}</Text>
        <Text data-testid="movie-release-date">
          {(UTC = movieDetails.release_date)}
        </Text>
        <Text data-testid="movie-runtime">2h 10m</Text>
      </VStack>
      <Text data-testid="movie-overview">{movieDetails.tagline}</Text>
    </Box>
  );
};

export default MovieDetailsPage;

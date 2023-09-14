import { Card, CardBody, Text, Image } from "@chakra-ui/react";
import { Movie } from "./MovieGrid";

interface Props {
  movies: Movie;
}
const MovieCard = ({ movies }: Props) => {
  return (
    <Card>
      <Image src={movies.poster_path} />
      <CardBody>
        <Text fontWeight="bold">{movies.title}</Text>
        <Text>{movies.release_date}</Text>
      </CardBody>
    </Card>
  );
};

export default MovieCard;

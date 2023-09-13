import axios from "axios";
import { useEffect, useState } from "react";

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/157336?api_key=6aba04cd50ebb345ca1615aef4874d00"
      )
      .then((response) => console.log(response));
  }, []);

  return <div>MovieGrid</div>;
};

export default MovieGrid;

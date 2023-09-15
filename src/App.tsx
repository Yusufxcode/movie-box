import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import HeaderDetails from "./components/HeaderDetails";
import Header from "./components/Header";
import MovieGrid from "./components/MovieGrid";
import Footer from "./components/Footer";
import MovieDetailsPage from "./components/MovieDetailsPage";

function App() {
  return (
    <Grid
      templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
    >
      <GridItem area={"header"}>
        <Header
          children={
            <>
              <NavBar />
              <HeaderDetails />
            </>
          }
        />
      </GridItem>
      <GridItem pl="2" area={"main"}>
        <MovieGrid />
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;

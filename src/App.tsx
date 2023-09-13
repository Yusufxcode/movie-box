import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import HeaderDetails from "./components/HeaderDetails";
import Header from "./components/Header";

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
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;

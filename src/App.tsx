import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/header";

function App() {
  return (
    <Grid
      templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
      gap={4}
      position="relative"
      zIndex={1}
    >
      <GridItem area={"header"}>
        <Header />
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

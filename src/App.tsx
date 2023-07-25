import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg:`"nav    nav"
            "aside main"
            "aside main"`,
        // md: `"nav    nav"
        //       "main main"` 
      }} 
      gap={"8px"}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg" >
        <GridItem area={"aside"}>
        <GenreList/>
      </GridItem>
      </Show>
      
      <GridItem area={"main"}>
       <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;

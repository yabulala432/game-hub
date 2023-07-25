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
      }} 
      templateRows={'.1fr .2fr 2fr'}
      gap={"8px"}
    >
      <GridItem bg={'purple'} area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg" >
        <GridItem bg={'purple'} area={"aside"}>
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

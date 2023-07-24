import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    // <Grid
    //   templateAreas={`"header header"
    //               "nav main"
    //               "nav main"`}
    //   gridTemplateRows={".5fr 1fr 1fr"}
    //   gridTemplateColumns={".4fr 1fr"}
    //   h="200px"
    //   gap="1"
    //   color="blackAlpha.700"
    //   fontWeight="bold"
    // >
    //   <GridItem pl="2" bg="orange.300" area={"header"}>
    //     Header
    //   </GridItem>
    //   <GridItem pl="2" bg="pink.300" area={"nav"}>
    //     Nav
    //   </GridItem>
    //   <GridItem pl="2" bg="green.300" area={"main"}>
    //     Main
    //   </GridItem>
    // </Grid>
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg:`"nav    nav"
                      "aside main"
                      "aside main"`,
      }}
      // gridTemplateRows={".5fr 1fr 1fr"}
      // gridTemplateColumns={".3fr 1fr"}
      height={"500"}
      gap={"10px"}
    >
      <GridItem bg={"tomato"} area={"nav"}>
        nav
      </GridItem>
      <Show above="lg">
        <GridItem bg={"gold"} area={"aside"}>
        aside
      </GridItem>
      </Show>
      
      <GridItem bg={"seagreen"} area={"main"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;

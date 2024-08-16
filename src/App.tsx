import { Grid, GridItem, Show } from "@chakra-ui/react";

import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

import GameHeading from "./components/GameHeading";


export default function App() {
   
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}>
      <GridItem area={"nav"}>
        <NavBar
           
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} padding={"10px"}>
          <GenreList
           
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameHeading />
        <PlatformSelector
          
        />
        <SortSelector
           
        />
        <GameGrid   />
      </GridItem>
    </Grid>
  );
}

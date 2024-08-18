import { Grid, Show, GridItem } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

export default function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}>
      <Show above="lg">
        <GridItem area={"aside"} padding={"10px"}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameHeading />
        <PlatformSelector />
        <SortSelector />
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

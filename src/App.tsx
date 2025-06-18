import { Box, Grid, GridItem, Heading, HStack } from "@chakra-ui/react";
import "./App.css";

import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const [sortOrder, setSortOrder] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const gameQuery = {
    selectedGenre: selectedGenre,
    selectedPlatform: selectedPlatform,
    sortOrder: sortOrder,
    searchText: search,
  };

  const handleSelectedGenre = (genreName: Genres) => {
    setSelectedGenre(genreName);
  };

  const handleSelectedPlatform = (platform: Platform) => {
    console.log("Selected Platform:", platform);
    setSelectedPlatform(platform);
  };

  const handleSelectedSortOrder = (order: string) => {
    setSortOrder(order);
  };

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    setSearch(query);
  };

  return (
    <Box>
      {/* Navbar */}
      <NavBar onSearch={handleSearch} />

      {/* Grid Layout */}
      <Grid templateColumns={{ base: "1fr", md: "250px 1fr" }} templateRows="1fr" minH="calc(100vh - 64px)" gap={4} p={0}>
        {/* Aside Panel */}
        <GridItem as="aside" p={5} display={{ base: "none", md: "block" }}>
          <GenreList onSelectGenre={handleSelectedGenre}></GenreList>
        </GridItem>

        {/* Main Content */}
        <GridItem as="main">
          <Heading as="h1" paddingLeft={5} marginY={5} fontSize="5xl" fontWeight="bold">
            Games
          </Heading>
          <Box paddingLeft={5}>
            <HStack>
              <PlatformSelector onSelectPlatform={handleSelectedPlatform}></PlatformSelector>
              <SortSelector onSelectOrder={handleSelectedSortOrder} sortOrder={sortOrder}></SortSelector>
            </HStack>

            {/* <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}></GameGrid> */}
            <GameGrid gameQuery={gameQuery} />
          </Box>
          {/* <GameGrid></GameGrid> */}
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;

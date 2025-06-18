import { SimpleGrid } from "@chakra-ui/react";
import useGames, { type Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import type { Genres } from "../hooks/useGenres";

interface GameGridProps {
  gameQuery: {
    selectedGenre: Genres | null;
    selectedPlatform: Platform | null;
    sortOrder: string;
  };
}

export default function GameGrid({ gameQuery }: GameGridProps) {
  const { data: games, error, isLoading } = useGames(gameQuery);

  const skeletonCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap="6" marginY={5} listStyleType="none">
      {isLoading &&
        skeletonCount.map((skeleton) => (
          <li key={skeleton}>
            <GameCardSkeleton />
          </li>
        ))}

      {!isLoading &&
        games.map((game) => (
          <li key={game.id}>
            <GameCard game={game} />
          </li>
        ))}

      {error && <p>Error: {error}</p>}
    </SimpleGrid>
  );
}

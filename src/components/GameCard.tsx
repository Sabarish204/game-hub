import type { Game } from "../hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCropppedImageUrl from "../services/image-url";

interface GameCardProps {
  game: Game;
}
export default function GameCard(props: GameCardProps) {
  return (
    <>
      <Card.Root borderRadius={8} overflow="hidden" boxShadow="md">
        <Image src={getCropppedImageUrl(props.game.background_image)} alt={props.game.name} width="100%" height="200px" objectFit="cover" />

        <Card.Body minHeight="80px" padding="4">
          <HStack justifyContent="space-between" marginBottom={2}>
            <PlatformIconList platforms={props.game.parent_platforms.map((p) => p.platform)} />
            <CriticScore score={props.game.metacritic}></CriticScore>
          </HStack>
          <Heading size="md" textAlign="center" fontSize="2xl" mb={2}>
            {props.game.name}
          </Heading>
        </Card.Body>
      </Card.Root>
    </>
  );
}

import { Badge } from "@chakra-ui/react";
import { Tooltip } from "./ui/tooltip";

interface CriticScoreProps {
  score: number;
}

export default function CriticScore(props: CriticScoreProps) {
  return (
    <Tooltip content="Metacritic Score">
      <Badge boxSize={6} color="green">
        {props.score}
      </Badge>
    </Tooltip>
  );
}

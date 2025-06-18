import { useState } from "react";
import { List, Text, HStack, Image, Skeleton, SkeletonText, Heading } from "@chakra-ui/react";
import useGeners, { type Genres } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genreName: Genres) => void;
}

export default function GenreList({ onSelectGenre }: Props) {
  const { data: genres, isLoading } = useGeners();
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);

  return (
    <>
      <Heading fontSize="5xl" fontWeight="bold">
        Genres
      </Heading>

      <List.Root listStyleType="none" padding={2}>
        {isLoading
          ? [...Array(10)].map((_, index) => (
              <List.Item key={index} paddingY={5} paddingX={3} borderRadius="md">
                <HStack>
                  <Skeleton boxSize="50px" borderRadius="md" />
                  <SkeletonText noOfLines={1} width="150px" />
                </HStack>
              </List.Item>
            ))
          : genres.map((genre) => {
              const isSelected = genre.id === selectedGenreId;
              return (
                <List.Item
                  key={genre.id}
                  paddingY={5}
                  paddingX={3}
                  borderRadius="md"
                  cursor="pointer"
                  onClick={() => {
                    setSelectedGenreId(genre.id);
                    onSelectGenre(genre);
                  }}
                >
                  <HStack>
                    <Image boxSize="50px" borderRadius="md" src={genre.image_background} alt={genre.name} objectFit="cover" />
                    <Text fontWeight="semibold" fontSize={isSelected ? "xl" : "md"} textDecoration={isSelected ? "underline" : "none"}>
                      {genre.name}
                    </Text>
                  </HStack>
                </List.Item>
              );
            })}
      </List.Root>
    </>
  );
}

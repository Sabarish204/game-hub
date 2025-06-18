import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkeleton() {
  return (
    <Card.Root borderRadius={8} overflow="hidden" boxShadow="md">
      <Skeleton height="200px" width="100%" />

      <Card.Body minHeight="80px" padding="4">
        <SkeletonText noOfLines={1} width="70%" margin="0 auto" />

        <HStack justifyContent="space-between" marginTop={4}>
          <HStack>
            <Skeleton boxSize={4} borderRadius="full" />
            <Skeleton boxSize={4} borderRadius="full" />
            <Skeleton boxSize={4} borderRadius="full" />
          </HStack>
          <Skeleton height="20px" width="30px" borderRadius="md" />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}

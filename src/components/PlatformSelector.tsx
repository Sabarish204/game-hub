import { Button, Menu, Portal, HStack, Text } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatforms, { type Platform } from "../hooks/usePlatforms";
import { useState } from "react";

interface PlatformProps {
  onSelectPlatform: (platform: Platform) => void;
}

export default function PlatformSelector({ onSelectPlatform }: PlatformProps) {
  const { data: platforms } = usePlatforms();
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const handleSelect = (platform: Platform) => {
    setSelectedPlatform(platform); // update local UI
    onSelectPlatform(platform); // notify parent
  };

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="xs" w="175px">
          <HStack justify="space-between" w="100%">
            <Text>{selectedPlatform ? selectedPlatform.name : "Platform"}</Text>
            <FaChevronDown />
          </HStack>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {platforms?.map((platform) => (
              <Menu.Item key={platform.id} value={platform.slug} onClick={() => handleSelect(platform)}>
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

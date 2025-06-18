import { HStack, Icon } from "@chakra-ui/react";
import type { Platform } from "../hooks/useGames";
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { Tooltip } from "./ui/tooltip";

interface PlatformIconListProps {
  platforms: Platform[];
}
export default function PlatformIconList(props: PlatformIconListProps) {
  const iconMap = {
    pc: FaWindows,
    playstattion: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {props.platforms.map((platform) => (
        <Tooltip key={platform.id} content={platform.name}>
          <Icon as={iconMap[platform.slug as keyof typeof iconMap] || BsGlobe} color="gray.500" boxSize={5} />
        </Tooltip>
      ))}
    </HStack>
  );
}

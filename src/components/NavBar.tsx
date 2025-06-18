import { Image, HStack } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps {
  onSearch: (query: string) => void;
}

export default function NavBar({ onSearch }: NavBarProps) {
  return (
    <>
      <HStack px={10} py={10} justifyContent="space-between">
        <Image src={logo} boxSize="60px"></Image>

        <SearchInput onSearch={onSearch} />

        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
}

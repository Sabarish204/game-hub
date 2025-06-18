import { Switch, HStack } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root checked={colorMode === "dark"} onCheckedChange={toggleColorMode} colorPalette={"green"}>
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label ml={2}>{colorMode === "dark" ? "🌙" : "☀️"}</Switch.Label>
      </Switch.Root>
    </HStack>
  );
}

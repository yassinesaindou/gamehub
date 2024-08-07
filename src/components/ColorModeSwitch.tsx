import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
          <Switch 
              colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}></Switch>
      <Text>Dark Mode</Text>
    </HStack>
  );
}

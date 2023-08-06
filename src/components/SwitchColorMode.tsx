import { Switch, useColorMode, Text, HStack } from "@chakra-ui/react";

const SwitchColorMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <HStack justifyContent={"end"}>
        <Switch
          onChange={toggleColorMode}
          isChecked={colorMode === "dark"}
          colorScheme="blue"
        />
        <Text>Dark Mode</Text>
      </HStack>
    </>
  );
};

export default SwitchColorMode;

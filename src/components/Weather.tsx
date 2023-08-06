import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        marginTop="-200px"
      >
        <Box
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          bgGradient="linear(to-t, cyan.500, teal.500)"
          width="300px"
        >
          <Input
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              console.log(e.target.value);
            }}
            variant="unstyled"
            placeholder="Enter your text..."
            fontSize="xl"
            textAlign="center"
            _placeholder={{ color: "white" }}
            color="white"
          />
        </Box>
        <Button
          mt={4}
          bgGradient="linear(to-r, teal.500, cyan.500)"
          color="white"
          _hover={{ bgGradient: "linear(to-r, cyan.500, teal.500)" }}
        >
          Submit
        </Button>
        <Text mt={2} color="gray.500">
          Some text below the submit button.
        </Text>
      </Box>
    </>
  );
};

export default Weather;

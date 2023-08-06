import { Box, Button, Container, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    max: number;
    min: number;
  };
  weather: {
    description: string;
  }[];
}

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
    import.meta.env.VITE_API_KEY
  }&units=metric`;

  const fetchWeatherData = async () => {
    const response = await axios.get(API_URL);
    const desc = response.data.weather[0].description;
    const capitalDesc = desc.charAt(0).toUpperCase() + desc.slice(1);
    setWeatherData({
      name: response.data.name,
      sys: {
        country: response.data.sys.country,
      },
      main: {
        temp: response.data.main.temp,
        max: response.data.main.temp_max,
        min: response.data.main.temp_min,
      },
      weather: [
        {
          description: capitalDesc,
        },
      ],
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchWeatherData();
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          marginTop="-100px"
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
              onChange={(e) => setCity(e.target.value)}
              variant="unstyled"
              placeholder="Enter City Name..."
              fontSize="xl"
              textAlign="center"
              _placeholder={{ color: "white" }}
              color="white"
            />
          </Box>
          <Button
            type="submit"
            mt={4}
            bgGradient="linear(to-r, teal.500, cyan.500)"
            color="white"
            _hover={{ bgGradient: "linear(to-r, cyan.500, teal.500)" }}
          >
            Submit
          </Button>
          <Text mt={2}>
            {weatherData && (
              <>
                <Container centerContent>
                  <Text fontSize="2xl" marginTop={2}>
                    {weatherData.name} , {weatherData.sys.country}
                  </Text>
                  <Text fontSize="6xl" as="b">
                    {" "}
                    {weatherData.main.temp}°C
                  </Text>
                  <Text fontSize="2xl" marginBottom={1}>
                    {weatherData.weather[0].description}
                  </Text>
                  <Text fontSize="2xl">
                    {weatherData.main.max}°C/{weatherData.main.min}°C
                  </Text>
                </Container>
              </>
            )}
          </Text>
        </Box>
      </form>
    </>
  );
};

export default Weather;

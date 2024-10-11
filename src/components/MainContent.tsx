import { useEffect } from "react";
import { useWeatherContext } from "../context";
import { useWeather } from "../hooks";
import { Box } from "@mui/material";
import { ContentSection, PlaceholderContainer } from "./common";
import { CurrentWeather } from "./CurrentWeather";
import { ForecastWeather } from "./ForecastWeather";
import { BoxData } from "./BoxData";
import emptyWeather from "../assets/animations/emptyWeather.json";
import loading from "../assets/animations/loading.json";

export const MainContent = () => {
  const { city, forecastData, setForecastData } = useWeatherContext();
  const { weatherQuery, forecastQuery } = useWeather(city);
  const weather = weatherQuery.data ?? null;
  const forecast = forecastQuery.data ?? null;

  // Se actualiza forecastData con los primeros 5 registros de la lista del pronóstico
  useEffect(() => {
    if (forecast) {
      const firstFiveHours = forecast.list.slice(0, 5).map((i) => ({
        date: i.dt_txt,
        temperature: i.main.temp,
        description: i.weather[0].description,
      }));

      setForecastData(firstFiveHours);
    }
  }, [forecast, setForecastData]);

  if (weatherQuery.isLoading || weatherQuery.isRefetching) {
    return (
      <PlaceholderContainer
        animationData={loading}
        description="Actualizando clima..."
        top="35%"
        fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.5rem" }}
      />
    );
  }

  return (
    <>
      {weather && forecastData.length ? (
        <ContentSection title="Tiempo Actual">
          <CurrentWeather
            city={weather?.name}
            temperature={weather?.main.temp}
            description={weather?.weather[0].description}
            icon={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
          >
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
              sx={{ gap: 2 }}
            >
              <BoxData
                type="Presión"
                unit="hPa"
                data={weather?.main.pressure}
                backgroundColor="#23BF89"
                color="#ffffff"
              />

              <BoxData
                type="Humedad"
                unit="%"
                data={weather?.main.humidity}
                backgroundColor="#F28F6B"
              />

              <BoxData
                type="Sensación"
                unit="°C"
                data={weather?.main.feels_like}
                backgroundColor="#A9A9A9"
                color="#ffffff"
              />

              <BoxData
                type="Nubosidad"
                unit="%"
                data={weather?.clouds.all}
                backgroundColor="#77C3F2"
              />
            </Box>
          </CurrentWeather>
          <ForecastWeather />
        </ContentSection>
      ) : (
        <>
          <PlaceholderContainer
            top="35%"
            fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.5rem" }}
            description="Ingresa una sucursal para visualizar la data"
            animationData={emptyWeather}
          />
        </>
      )}
    </>
  );
};

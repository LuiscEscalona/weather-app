import { useEffect } from "react";
import { useWeatherContext } from "../context/useWeatherContext";
import { useWeather } from "../hooks/useWeather.hook";
import { Box } from "@mui/material";
import { ContentSection } from "./ContentSection";
import { CurrentWeather } from "./CurrentWeather";
import { ForecastWeather } from "./ForecastWeather";
import { BoxData } from "./BoxData";
import { EmptyData } from "./EmptyData";

export const MainContent = () => {
  const { city, forecastData, setForecastData } = useWeatherContext();
  const { weatherQuery, forecastQuery } = useWeather(city);
  const weather = weatherQuery.data ?? null;
  const forecast = forecastQuery.data ?? null;

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
          <EmptyData />
        </>
      )}
    </>
  );
};

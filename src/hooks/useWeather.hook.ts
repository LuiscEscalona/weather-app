import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getCurrentWeather, getForecast } from "../actions";
import { ForecastResponse, WeatherResponse } from "../interfaces";

export const useWeather = (
  selected: string | null
): {
  weatherQuery: UseQueryResult<WeatherResponse, Error>;
  forecastQuery: UseQueryResult<ForecastResponse, Error>;
} => {
  const weatherQuery = useQuery({
    queryKey: ["weather", selected],
    queryFn: () => {
      if (selected) {
        return getCurrentWeather(selected);
      }
      return Promise.reject("No se selecciono sucursal");
    },
    enabled: false,
  });

  const forecastQuery = useQuery({
    queryKey: ["forecast", selected],
    queryFn: () => {
      if (selected) {
        return getForecast(selected);
      }
      return Promise.reject("No se selecciono sucursal");
    },
    enabled: false,
    // refetchInterval: 1000 * 60 * 60 * 3,
  });

  return { weatherQuery, forecastQuery };
};

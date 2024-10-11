import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getCurrentWeather, getForecast } from "../actions";
import { ForecastResponse, WeatherResponse } from "../interfaces";

export const useWeather = (
  selected: string | null
): {
  weatherQuery: UseQueryResult<WeatherResponse, Error>;
  forecastQuery: UseQueryResult<ForecastResponse, Error>;
} => {
  // Consulta para obtener el clima actual
  const weatherQuery = useQuery({
    // Con cada cambio del selected (city), la cache se limpia
    queryKey: ["weather", selected],
    queryFn: () => {
      // solo se llama al action cuando city tiene un valor
      if (selected) {
        return getCurrentWeather(selected);
      }
      return Promise.reject("No se selecciono sucursal");
    },
    enabled: false,
    // Enabled en false para evitar que se disparen llamadas al cambiar la queryKey
    // Solo se dispara la llamada cuando se hace click o enter en el input
  });

  // Consulta para obtener el prónostico del clima
  const forecastQuery = useQuery({
    queryKey: ["forecast", selected],
    queryFn: () => {
      if (selected) {
        return getForecast(selected);
      }
      return Promise.reject("No se selecciono sucursal");
    },
    enabled: false,
  });

  return { weatherQuery, forecastQuery };
};

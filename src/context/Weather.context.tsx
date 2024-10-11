import { createContext, useState, FC, ReactNode } from "react";
import { WeatherContextType } from "../interfaces/weatherContextType.interface";
import { ForecastData, WeatherResponse } from "../interfaces";

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined
);

export const WeatherProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [city, setCity] = useState<string | null>(null); // Sucursal seleccionada por el usuario
  const [filteredHistory, setFilteredHistory] = useState<WeatherResponse[]>([]); // Historial filtrado
  const [forecastData, setForecastData] = useState<ForecastData[]>([]); // Prónostico del clima
  const [isSearchActivated, setIsSearchActivated] = useState<boolean>(false); // Flag para control de búsqueda

  // city: state para control del input de busqueda, queryKey
  // filteredHistory: state que almacena la data filtrada del localStorage para mostrar
  // forecastData: state que almacena el pronostico para mostrar
  // isSearchActivated:  flag que indica si se activo la búsqueda para actualizar los states

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        filteredHistory,
        setFilteredHistory,
        forecastData,
        setForecastData,
        isSearchActivated,
        setIsSearchActivated,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

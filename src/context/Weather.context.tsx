import { createContext, useState, FC, ReactNode } from "react";
import { WeatherContextType } from "../interfaces/weatherContextType.interface";
import { ForecastData, WeatherResponse } from "../interfaces";

export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined
);

export const WeatherProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [city, setCity] = useState<string | null>(null);
  const [filteredHistory, setFilteredHistory] = useState<WeatherResponse[]>([]);
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [isSearchActivated, setIsSearchActivated] = useState<boolean>(false);

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

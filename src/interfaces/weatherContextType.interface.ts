import { ForecastData } from "./forecast.interface";
import { WeatherResponse } from "./weather.interface";

// Este interface se utiliza para definir los tipos del contexto WeatherContext
export interface WeatherContextType {
  city: string | null;
  setCity: (value: string | null) => void;
  filteredHistory: WeatherResponse[];
  setFilteredHistory: (value: WeatherResponse[]) => void;
  forecastData: ForecastData[];
  setForecastData: (value: ForecastData[]) => void;
  isSearchActivated: boolean;
  setIsSearchActivated: (value: boolean) => void;
}

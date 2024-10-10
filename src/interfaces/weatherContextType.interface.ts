import { ForecastData } from "./forecast.interface";
import { WeatherResponse } from "./weather.interface";

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

import { useContext } from "react";
import { WeatherContext } from "./Weather.context";
import { WeatherContextType } from "../interfaces/weatherContextType.interface";

export const useWeatherContext = (): WeatherContextType => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeatherContext error");
  }

  return context;
};

import { weatherApi } from "../api/weather.api";
import { WeatherResponse } from "../interfaces";

export const getCurrentWeather = async (
  city: string
): Promise<WeatherResponse> => {
  if (city !== "") {
    const { data } = await weatherApi.get<WeatherResponse>("weather", {
      params: {
        q: city,
        units: "metric",
      },
    });

    return data;
  }

  throw new Error("Debe seleccionar una sucursal");
};

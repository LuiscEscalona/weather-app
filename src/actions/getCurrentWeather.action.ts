import { weatherApi } from "../api/weather.api";
import { WeatherResponse } from "../interfaces";

export const getCurrentWeather = async (
  city: string
): Promise<WeatherResponse> => {
  if (city !== "") {
    try {
      const { data } = await weatherApi.get<WeatherResponse>("weather", {
        params: {
          q: city,
          units: "metric",
        },
      });

      if (data && data.weather && data.main) {
        const history = JSON.parse(localStorage.getItem(`history`) || "[]");
        history.push(data);
        localStorage.setItem(`history`, JSON.stringify(history));
      }

      return data;
    } catch (error) {
      console.log("Error:", error);
      throw new Error("No se pudo obtener el clima para esta ciudad");
    }
  }

  throw new Error("Debe seleccionar una sucursal");
};

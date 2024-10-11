import { weatherApi } from "../api";
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
        // Se guardan los datos en el localStorage para generar el histórico por sucursal
        let history = JSON.parse(localStorage.getItem(`history`) || "[]");
        history = [...history, data];
        localStorage.setItem(`history`, JSON.stringify(history));
      }

      return data;
    } catch (error) {
      console.log("Error:", error);
      throw new Error("No se pudo obtener el clima para esta sucursal");
    }
  }

  throw new Error("Debe seleccionar una sucursal");
};

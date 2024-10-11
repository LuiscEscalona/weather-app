import { weatherApi } from "../api";
import { ForecastResponse } from "../interfaces";

export const getForecast = async (city: string): Promise<ForecastResponse> => {
  if (city !== "") {
    const { data } = await weatherApi.get<ForecastResponse>("forecast", {
      params: {
        q: city,
        units: "metric",
      },
    });

    return data;
  }

  throw new Error("Debe seleccionar una sucursal");
};

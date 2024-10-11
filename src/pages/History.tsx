import { useEffect, useState } from "react";
import { useWeatherContext } from "../context";
import { useWeather } from "../hooks";

import { WeatherTable, WeatherGraphs, ButtonsContainer } from "../components";
import { PlaceholderContainer } from "../components/common";
import { getStringBeforeComma, containsWords } from "../utils";
import { WeatherResponse } from "../interfaces";
import emptyWeather from "../assets/animations/emptyWeather.json";
import loading from "../assets/animations/loading.json";

export const History = () => {
  const {
    city,
    filteredHistory,
    setFilteredHistory,
    isSearchActivated,
    setIsSearchActivated,
  } = useWeatherContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { weatherQuery } = useWeather(city);
  const { isLoading: isWeatherLoading, isRefetching } = weatherQuery;

  //  Se actualiza filteredHistory con los datos almacenados en el localStorage
  useEffect(() => {
    // filterhistory simula una petición para obtener el histórico por sucursal
    const filterHistory = async () => {
      setIsLoading(true);

      const fetchData = (): Promise<WeatherResponse[]> => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const json = localStorage.getItem("history");
            const history: WeatherResponse[] = json ? JSON.parse(json) : [];
            resolve(history);
          }, 2000);
        });
      };

      try {
        const data = await fetchData();

        if (data.length && city) {
          // Se utiliza getStringBeforeComma para obtener solo la ciudad del value del state city
          // Esto se debe a que la descripción del combo es 'ciudad, país'
          const target = getStringBeforeComma(city);
          const targetWords = target.split(" ");
          // Se utiliza containsWords para comprobar si el nombre de la ciudad
          // (en inglés, proveniente de la API de OpenWeather) contiene alguna de las palabras claves extraídas,
          //  permitiendo un match en el filtro
          const filtered = data.filter(
            (i) => i.name && containsWords(i.name, targetWords)
          );

          setFilteredHistory(filtered);
        } else {
          setFilteredHistory([]);
        }
      } catch (error) {
        console.error(error);
        setFilteredHistory([]);
      } finally {
        setIsLoading(false);
        setIsSearchActivated(false);
      }
    };

    if (isSearchActivated) {
      filterHistory();
    }
  }, [city, isSearchActivated, setFilteredHistory]);

  // se utilizan isWeatherLoading isRefetchingy de la query y el isLoading local para controlar que se cumplan ambas peticiones
  if (isWeatherLoading || isRefetching || isLoading) {
    return (
      <PlaceholderContainer
        animationData={loading}
        description="Actualizando histórico..."
        top="35%"
        fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.5rem" }}
      />
    );
  }

  return (
    <>
      {filteredHistory.length && !isLoading ? (
        <>
          <ButtonsContainer />
          <WeatherTable />
          <WeatherGraphs />
        </>
      ) : (
        <PlaceholderContainer
          top="35%"
          fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.5rem" }}
          description="Ingresa una sucursal para visualizar histórico"
          animationData={emptyWeather}
        />
      )}
    </>
  );
};

import { useEffect, useState } from "react";
import { useWeatherContext } from "../context";
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

  // update filteredHistory
  useEffect(() => {
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
          const target = getStringBeforeComma(city);
          const targetWords = target.split(" ");
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
      }
    };

    if (isSearchActivated) {
      filterHistory();
      setIsSearchActivated(false);
    }
  }, [city, isSearchActivated, setFilteredHistory]);

  if (isLoading) {
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

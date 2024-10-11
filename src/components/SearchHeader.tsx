import { useEffect, useState } from "react";
import { useWeatherContext } from "../context/useWeatherContext";
import { useWeather } from "../hooks/useWeather.hook";
import { DropDownWithButton } from "./DropDownWithButton";
import { Header } from "./Header";
import { menuOptions } from "../data/menuOptions";
import sucursales from "../data/sucursales.json";
import { MenuWrapper } from "./MenuWrapper";

export const SearchHeader = () => {
  const { city, setCity, setIsSearchActivated } = useWeatherContext();
  const [isOpenFeedback, setIsOpenFeedback] = useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const { weatherQuery } = useWeather(city);
  const { forecastQuery } = useWeather(city);
  const weather = weatherQuery.data ?? null;

  useEffect(() => {
    if (weatherQuery.isError) {
      const feedback = weatherQuery.error.message;
      setFeedbackMessage(feedback);
      setIsOpenFeedback(true);
      setIsSearchActivated(false);
    }
  }, [weather, weatherQuery]);

  const handleSearch = () => {
    if (city) {
      setIsSearchActivated(true);
      weatherQuery.refetch();
      forecastQuery.refetch();
    } else {
      setFeedbackMessage("Debe ingresar algún valor para iniciar la búsqueda");
      setIsOpenFeedback(true);
    }
  };

  const handleCloseFeedback = () => {
    setIsOpenFeedback(false);
  };

  return (
    <>
      <Header title="Weather App" menu={<MenuWrapper options={menuOptions} />}>
        <DropDownWithButton
          setValue={setCity}
          value={city}
          handleSearch={handleSearch}
          options={sucursales}
          label="Sucursales"
          handleCloseFeedback={handleCloseFeedback}
          durationFeedback={6000}
          feedbackMessage={feedbackMessage}
          isOpenFeedback={isOpenFeedback}
        />
      </Header>
    </>
  );
};

import { useEffect, useState } from "react";
import { useWeatherContext } from "../context";
import { useWeather } from "../hooks";
import { Header, MenuWrapper, DropDownWithButton } from "./common";
import { menuOptions } from "../data/menuOptions";
import sucursales from "../data/sucursales.json";

export const SearchHeader = () => {
  const { city, setCity, isSearchActivated, setIsSearchActivated } =
    useWeatherContext();
  const { weatherQuery } = useWeather(city);
  const { forecastQuery } = useWeather(city);
  const weather = weatherQuery.data ?? null;

  // Estados locales para manejo de feedback
  const [isOpenFeedback, setIsOpenFeedback] = useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  useEffect(() => {
    if (weatherQuery.isError && isSearchActivated) {
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

  // DropDownWithButton permite la búsqueda si el usuario selecciona una opción no incluida en el combo inicial,
  // Siguiendo la premisa: debe permitir la búsqueda de nuevas sucursales

  return (
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
  );
};

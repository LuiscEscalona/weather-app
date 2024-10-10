import { Routes, Route } from "react-router-dom";
import { useWeatherContext } from "../context/useWeatherContext";
import { useWeather } from "../hooks/useWeather.hook";
import { Home, History, NotFound } from "../pages";
import { ErrorResponse, Loading } from "../components";

const AppRoutes = () => {
  const { city } = useWeatherContext();
  const { weatherQuery } = useWeather(city);

  if (weatherQuery.isLoading || weatherQuery.isRefetching) {
    return <Loading />;
  }

  if (weatherQuery.isError) {
    return <ErrorResponse />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/historico" element={<History />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

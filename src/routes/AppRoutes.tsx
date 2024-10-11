import { Routes, Route } from "react-router-dom";
import { useWeatherContext } from "../context";
import { useWeather } from "../hooks";
import { Home, History, NotFound } from "../pages";
import { PlaceholderContainer } from "../components/common";
import errorResponse from "../assets/animations/errorResponse.json";

const AppRoutes = () => {
  const { city } = useWeatherContext();
  const { weatherQuery } = useWeather(city);

  if (weatherQuery.isError) {
    return (
      <PlaceholderContainer
        animationData={errorResponse}
        description="Error de búsqueda, intente otra opción"
        top="35%"
        fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.5rem" }}
      />
    );
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

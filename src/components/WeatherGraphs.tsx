import { useWeatherContext } from "../context";
import { Box } from "@mui/material";
import { Graph } from "./common";

export const WeatherGraphs = () => {
  const { filteredHistory } = useWeatherContext();

  if (!filteredHistory || !filteredHistory.length) {
    return <div>No hay datos para mostrar</div>;
  }

  // Mapea el filteredHistory para extraer los datos de temperatura
  const temperatureData = filteredHistory.map((item) => ({
    dt: item.dt,
    value: item.main.temp,
  }));

  // Mapea el filteredHistory para extraer los datos de humedad
  const humidityData = filteredHistory.map((item) => ({
    dt: item.dt,
    value: item.main.humidity,
  }));

  // Mapea el filteredHistory para extraer los datos de velocidad del viento
  const windSpeedData = filteredHistory.map((item) => ({
    dt: item.dt,
    value: item.wind.speed,
  }));

  return (
    <>
      <Box
        id="pdf-content"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        p={2}
      >
        {/* Gráfico de Temperatura */}
        <Graph<{ dt: number; value: number }>
          data={temperatureData}
          title="Temperatura en el tiempo"
          yLabel="Temperatura (°C)"
          xKey={(item) => new Date(item.dt * 1000).toLocaleString()}
          yKey={(item) => item.value}
          chartType="line"
        />

        {/* Gráfico de Humedad */}
        <Graph<{ dt: number; value: number }>
          data={humidityData}
          title="Humedad en el tiempo"
          yLabel="Humedad (%)"
          xKey={(item) => new Date(item.dt * 1000).toLocaleString()}
          yKey={(item) => item.value}
          chartType="line"
          colors={["#66DA26"]}
        />

        {/* Gráfico de Velocidad del Viento */}
        <Graph<{ dt: number; value: number }>
          data={windSpeedData}
          title="Velocidad en el tiempo"
          yLabel="Velocidad del viento (m/s)"
          xKey={(item) => new Date(item.dt * 1000).toLocaleString()}
          yKey={(item) => item.value}
          chartType="line"
          colors={["#FF9800"]}
        />
      </Box>
    </>
  );
};

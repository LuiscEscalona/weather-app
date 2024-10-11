import { useWeatherContext } from "../context";
import { Box } from "@mui/material";
import { Graph } from "./common";

export const WeatherGraphs = () => {
  const { filteredHistory } = useWeatherContext();

  if (!filteredHistory || !filteredHistory.length) {
    return <div>No hay datos para mostrar</div>;
  }

  const temperatureData = filteredHistory.map((item) => ({
    dt: item.dt,
    value: item.main.temp,
  }));

  const humidityData = filteredHistory.map((item) => ({
    dt: item.dt,
    value: item.main.humidity,
  }));

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
        <Graph<{ dt: number; value: number }>
          data={temperatureData}
          title="Temperatura en el tiempo"
          yLabel="Temperatura (°C)"
          xKey={(item) => new Date(item.dt * 1000).toLocaleString()}
          yKey={(item) => item.value}
          chartType="line"
        />

        <Graph<{ dt: number; value: number }>
          data={humidityData}
          title="Humedad en el tiempo"
          yLabel="Humedad (%)"
          xKey={(item) => new Date(item.dt * 1000).toLocaleString()}
          yKey={(item) => item.value}
          chartType="line"
          colors={["#66DA26"]}
        />

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

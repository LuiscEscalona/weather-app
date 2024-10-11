import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { useWeatherContext } from "../context";
import { ForecastList } from "./ForecastList";
import { GlassBox } from "./common";

interface Props {
  children?: ReactNode;
}

export const ForecastWeather: React.FC<Props> = ({ children }) => {
  const { forecastData } = useWeatherContext();

  return (
    <Box
      className="container-weather-home bg-color"
      sx={{
        backgroundColor: "#e0f7fa",
        textAlign: "center",
        maxWidth: "500px",
        minHeight: "520px",
        margin: "auto",
        flexGrow: 1,
      }}
    >
      <GlassBox sx={{ padding: { xs: "10px", sm: "20px" } }}>
        <Typography
          variant="h4"
          mb={3}
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
        >
          Pronóstico
        </Typography>
        <ForecastList list={forecastData} />
        {children}
      </GlassBox>
    </Box>
  );
};

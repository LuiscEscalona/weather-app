import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { GlassBox } from "./GlassBox";

interface Props {
  city?: string;
  temperature?: number;
  description?: string;
  icon?: string;
  children?: ReactNode;
}

export const CurrentWeather: React.FC<Props> = ({
  city,
  temperature,
  description,
  icon,
  children,
}) => {
  return (
    <Box
      className="container-weather-home bg-color"
      sx={{
        // padding: { xs: "10px", sm: "20px" },
        backgroundColor: "#e0f7fa",
        textAlign: "center",
        maxWidth: "500px",
        minHeight: "520px",
        margin: "auto",
      }}
    >
      <GlassBox sx={{ padding: { xs: "10px", sm: "20px" } }}>
        <Typography
          variant="h4"
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
        >
          Clima en {city}
        </Typography>
        <Typography
          variant="h6"
          sx={{ margin: "10px 0", fontSize: { xs: "1rem", sm: "1.5rem" } }}
        >
          Temperatura: {temperature} °C
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          Clima: {description}
        </Typography>
        <img src={icon} alt={description} />

        {children}
      </GlassBox>
    </Box>
  );
};

import { Typography } from "@mui/material";
import emptyWeather from "../assets/animations/emptyWeather.json";
import { LottieAnimation } from "./LottieAnimation";

export const EmptyData = () => {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 1,
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
        }}
      >
        Ingresa una sucursal para visualizar la data
      </Typography>
      <LottieAnimation animationData={emptyWeather} />
    </>
  );
};

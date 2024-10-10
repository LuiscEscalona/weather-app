import { Typography } from "@mui/material";
import errorResponse from "../assets/animations/errorResponse.json";
import { LottieAnimation } from "./LottieAnimation";

export const ErrorResponse = () => {
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
        Error de búsqueda, intente otra opción
      </Typography>
      <LottieAnimation animationData={errorResponse} />
    </>
  );
};

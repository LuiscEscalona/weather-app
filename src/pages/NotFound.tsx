import { Typography } from "@mui/material";
import { LottieAnimation } from "../components";
import notFound from "../assets/animations/notFound.json";

export const NotFound = () => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#808080",
          textAlign: "center",
          zIndex: 1,
          fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
        }}
      >
        404 NOT FOUND
      </Typography>
      <LottieAnimation animationData={notFound} />
    </>
  );
};

import { Typography } from "@mui/material";
import { LottieAnimation } from "./LottieAnimation";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "subtitle1"
  | "subtitle2";

interface Props {
  title?: TypographyVariant;
  top?: string;
  left?: string;
  fontSize?: object;
  color?: string;
  animationData: object;
  description: string;
}

export const PlaceholderContainer: React.FC<Props> = ({
  title = "h6",
  top = "50%",
  left = "50%",
  fontSize = { xs: "1.5rem", sm: "2rem", md: "3rem" },
  color = "#213547",
  animationData,
  description,
}) => {
  return (
    <>
      <Typography
        variant={title}
        sx={{
          position: "absolute",
          top: top,
          left: left,
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 1,
          fontSize: fontSize,
          color: color,
        }}
      >
        {description}
      </Typography>
      <LottieAnimation animationData={animationData} />
    </>
  );
};

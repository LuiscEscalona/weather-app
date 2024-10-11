import { Box, Typography } from "@mui/material";
import { GlassBox } from "./common";

interface Props {
  type: string;
  data?: number;
  unit: string;
  backgroundColor?: string;
  color?: string;
}

export const BoxData: React.FC<Props> = ({
  type,
  data = 0,
  unit,
  backgroundColor = "#f0f0f0",
  color = "#213547",
}) => {
  return (
    <Box
      sx={{
        flex: "1 1 24%",
        minWidth: 200,
        backgroundColor,
        borderRadius: "8px",
      }}
    >
      <GlassBox>
        <Box
          sx={{
            color,
            borderRadius: "8px",
            p: "1rem",
            boxShadow: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            {type}
          </Typography>
          <Typography
            variant="h6"
            sx={{ margin: "10px 0", fontSize: { xs: "1rem", sm: "1.5rem" } }}
          >
            {data} {unit}
          </Typography>
        </Box>
      </GlassBox>
    </Box>
  );
};

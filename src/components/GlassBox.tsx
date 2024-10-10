import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const GlassBox = styled(Box)({
  background: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(10px)",
  borderRadius: "8px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
});

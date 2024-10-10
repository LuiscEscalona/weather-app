import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
  children?: ReactNode;
  backgroundColor?: string;
  direction?: "row" | "column";
}

export const ContentSection: React.FC<Props> = ({
  title,
  children,
  backgroundColor = "#f0f0f0",
  direction = "row",
}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: { xs: "10px", sm: "20px" },
        overflow: "auto",
        backgroundColor,
      }}
    >
      <Typography
        variant="h6"
        sx={{ flexGrow: 1, textAlign: "center", marginBottom: 2 }}
      >
        {title}
      </Typography>

      <Box
        display="flex"
        flexDirection={direction}
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          gap: 2,
          width: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

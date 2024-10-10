import { ReactNode } from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

interface Props {
  title: string;
  children?: ReactNode;
  menu?: ReactNode;
}

export const Header: React.FC<Props> = ({ title, children, menu }) => {
  return (
    <AppBar position="static">
      <Toolbar
        className="bg-color"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingTop: { xs: "16px", sm: "0" },
          }}
        >
          {menu}{" "}
          <Typography
            variant="h5"
            sx={{
              textAlign: { xs: "center", sm: "left" },
              flex: 1,
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
          >
            {title}
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "250px" },
            marginTop: { xs: "5px", sm: "0" },
            display: "flex",
            padding: "16px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

import { useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import { SearchHeader } from "./components";
import AppRoutes from "./routes/AppRoutes";
import { menuOptions } from "./data/menuOptions";
import "./App.css";

function App() {
  const location = useLocation();
  const isPathExist = menuOptions.some(
    (option) => option.path === location.pathname
  );

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        padding: { xs: 0, sm: 0 },
      }}
    >
      {isPathExist && <SearchHeader />}
      <AppRoutes />
    </Container>
  );
}

export default App;

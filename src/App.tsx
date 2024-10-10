import { useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import { SearchHeader } from "./components";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

function App() {
  const location = useLocation();
  const isNotFound =
    location.pathname !== "/" && location.pathname !== "/historico";

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100%",
          padding: { xs: 0, sm: 0 },
        }}
      >
        {!isNotFound && <SearchHeader />}
        <AppRoutes />
      </Container>
    </>
  );
}

export default App;

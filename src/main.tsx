import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeatherProvider } from "./context/Weather.context.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
      retry: 1,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <WeatherProvider>
      <Router>
        <App />
      </Router>
    </WeatherProvider>
  </QueryClientProvider>
  // </StrictMode>
);

import { render, screen } from "@testing-library/react";
import { SearchHeader } from "../components/SearchHeader";
import { WeatherProvider } from "../context/Weather.context";

// Tuve problemas para hacer correr los tests debido a un problema de tipado con typeScript

// Verifica si el componente se renderiza
describe("SearchHeader", () => {
  test("renders Search con titulo y menú", () => {
    render(
      <WeatherProvider>
        <SearchHeader />
      </WeatherProvider>
    );
    expect(screen.getByText(/Weather App/i)).toBeInTheDocument();
  });
});

// Verifica el funcionamiento cuando city es null y se genera la búsqueda
test("Muestra feedback cuando se busca sin ciudad", () => {
  render(
    <WeatherProvider>
      <SearchHeader />
    </WeatherProvider>
  );

  const searchButton = screen.getByRole("button", { name: /search/i });
  searchButton.click();
  expect(
    screen.getByText(/Debe ingresar algún valor para iniciar la búsqueda/i)
  ).toBeInTheDocument();
});

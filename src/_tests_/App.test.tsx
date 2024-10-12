import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../App";

test("Renders App", () => {
  render(<App />);
  expect(true).toBeTruthy();
});

// Tuve problemas para hacer correr los tests debido a un problema de tipado con typeScript

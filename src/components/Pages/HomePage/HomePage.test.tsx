import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When rendered", () => {
    test("Then it should show the heading 'Robot's list' text on it", () => {
      const cardText = "Robot's list";

      render(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      );

      const expectedHeader = screen.getByRole("heading", { name: cardText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When rendered", () => {
    test("Then it should show the heading 'Robot's list' text on it", () => {
      const cardText = "Robot's list";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </Provider>
      );

      const expectedHeader = screen.getByRole("heading", { name: cardText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});

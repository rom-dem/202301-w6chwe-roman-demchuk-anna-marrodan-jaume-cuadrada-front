import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App Component", () => {
  describe("When rendered with title 'ROBOT APP'", () => {
    test("Then it should show a header with 'ROBOT APP' title text on it", () => {
      const headerTitle = "ROBOT APP";

      render(<App />);
      const expectedText = screen.getByText(headerTitle);

      expect(expectedText).toBeInTheDocument();
    });
  });
});

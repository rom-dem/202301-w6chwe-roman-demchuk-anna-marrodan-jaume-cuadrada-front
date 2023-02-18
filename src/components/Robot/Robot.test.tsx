import { render, screen } from "@testing-library/react";
import Robot from "./Robot";

describe("Given a Robot component", () => {
  describe("When rendered", () => {
    test("Then it should show an image", () => {
      render(<Robot />);
      const robotImage = screen.getByRole("img");

      expect(robotImage).toBeInTheDocument();
    });

    test("Then it should show text with the content 'Robot 1'", () => {
      render(<Robot />);
      const expectedText = "ROBOT 1";

      const textResult = screen.getByText(expectedText);

      expect(textResult).toBeInTheDocument();
    });
  });
});

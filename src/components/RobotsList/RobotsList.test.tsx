import { render, screen } from "@testing-library/react";
import RobotsList from "./RobotsList";

describe("Given a RobotsList component", () => {
  describe("When rendered", () => {
    test("Then it should show a list of images", () => {
      render(<RobotsList />);

      const images = screen.getAllByRole("img");

      images.forEach((image) => {
        expect(image).toBeInTheDocument();
      });
    });
  });
});

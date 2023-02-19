import { render, screen } from "@testing-library/react";
import { RobotStructure } from "../../types";
import Robot from "./Robot";

const robot: RobotStructure = {
  _id: "",
  image: "",
  name: "El robotet",
  creation: "",
  endurance: 8,
  speed: 7,
};

describe("Given a Robot component", () => {
  describe("When rendered", () => {
    test("Then it should show an image", () => {
      render(<Robot robot={robot} />);
      const robotImage = screen.getByRole("img");

      expect(robotImage).toBeInTheDocument();
    });

    test("Then it should show text with the content 'Robot 1'", () => {
      render(<Robot robot={robot} />);
      const expectedText = robot.name;

      const textResult = screen.getByText(expectedText);

      expect(textResult).toBeInTheDocument();
    });
  });
});

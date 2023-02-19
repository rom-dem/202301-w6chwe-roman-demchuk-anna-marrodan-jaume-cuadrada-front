import { render, screen } from "@testing-library/react";
import RobotsList from "./RobotsList";
import { RobotsStructure } from "../../types";
import { store } from "../../store";
import { Provider } from "react-redux";

const mockRobotsData: RobotsStructure = [
  { _id: "12", image: "", name: "", creation: "", endurance: 8, speed: 5 },
  { _id: "10", image: "", name: "", creation: "", endurance: 3, speed: 2 },
];

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockRobotsData,
}));

describe("Given a RobotsList component", () => {
  describe("When rendered", () => {
    test("Then it should show a list of images", () => {
      render(
        <Provider store={store}>
          <RobotsList />
        </Provider>
      );

      const images = screen.getAllByRole("img");

      images.forEach((image) => {
        expect(image).toBeInTheDocument();
      });
    });
  });
});

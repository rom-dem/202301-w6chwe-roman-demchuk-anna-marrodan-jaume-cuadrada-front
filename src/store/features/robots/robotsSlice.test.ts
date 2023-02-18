import { RobotsStructure, RobotStructure } from "../../../types";
import { loadRobotsActionCreator, robotsReducer } from "./robotsSlice";

describe("Given a robotsReducer function", () => {
  const robotIBM: RobotStructure = {
    id: "",
    name: "IBM",
    creation: new Date(628021800000),
    endurance: 1,
    speed: 1,
  };

  const robotHAL: RobotStructure = {
    id: "",
    name: "HAL",
    creation: new Date(628022000000),
    endurance: 1,
    speed: 1,
  };

  const robots = [robotHAL, robotIBM];

  describe("When it receives an empty list and it is called with loadRobotActionCreator action", () => {
    test("Then it should load a list with 2 robots", () => {
      const initalRobots: RobotsStructure = [];

      const loadRobotsAction = loadRobotsActionCreator(robots);
      const expectedRobots = [robotHAL, robotIBM];
      const newRobots = robotsReducer(initalRobots, loadRobotsAction);

      expect(newRobots).toStrictEqual(expectedRobots);
    });
  });
});

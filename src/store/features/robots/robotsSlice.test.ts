import { RobotsStructure, RobotStructure } from "../../../types";
import {
  loadRobotsActionCreator,
  robotsReducer,
  deleteRobotActionsCreator,
} from "./robotsSlice";

describe("Given a robotsReducer function", () => {
  const robotIBM: RobotStructure = {
    id: "ibm",
    name: "IBM",
    creation: new Date(628021800000),
    endurance: 1,
    speed: 1,
  };

  const robotHAL: RobotStructure = {
    id: "hal",
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

  describe("Given a deleteRobot function", () => {
    describe("When it receives a list with two robots named IBM and HAL and a remove HAL action", () => {
      test("Then it should return a list with just IBM", () => {
        const students: RobotsStructure = [robotIBM, robotHAL];

        const removeHalAction = deleteRobotActionsCreator(robotHAL.id);
        const expectedNewRobots: RobotsStructure = [robotIBM];

        const newRobots = robotsReducer(students, removeHalAction);

        expect(newRobots).toStrictEqual(expectedNewRobots);
      });
    });
  });
});

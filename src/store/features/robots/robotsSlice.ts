import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RobotsStructure } from "../../../types";

const initialRobots: RobotsStructure = [];

const robotsSlice = createSlice({
  name: "robots",
  initialState: initialRobots,
  reducers: {
    loadRobots: (currentRobots, action: PayloadAction<RobotsStructure>) => [
      ...action.payload,
    ],
    deleteRobot: (currentRobots, action: PayloadAction<string>) =>
      currentRobots.filter((robot) => robot.id !== action.payload),
  },
});

export const robotsReducer = robotsSlice.reducer;
export const {
  loadRobots: loadRobotsActionCreator,
  deleteRobot: deleteRobotActionsCreator,
} = robotsSlice.actions;

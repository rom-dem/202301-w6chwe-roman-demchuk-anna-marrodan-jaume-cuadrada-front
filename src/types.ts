export interface RobotStructure {
  id: string;
  name: string;
  creation: Date;
  endurance: number;
  speed: number;
}

export type RobotsStructure = RobotStructure[];

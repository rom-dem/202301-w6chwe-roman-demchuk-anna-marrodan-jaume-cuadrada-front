export interface RobotStructure {
  id: string;
  name: string;
  creation: Date;
  endurance: number;
  speed: number;
}

export type RobotsStructure = RobotStructure[];

export interface RobotFromApiStructure {
  robots: RobotsStructure;
}

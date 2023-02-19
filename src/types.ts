export interface RobotStructure {
  _id: string;
  image: string;
  name: string;
  creation: string;
  endurance: number;
  speed: number;
}

export type RobotsStructure = RobotStructure[];

export interface RobotFromApiStructure {
  robots: RobotsStructure;
}

import Robot from "../Robot/Robot";
import RobotsListStyled from "./RobotsListStyled";

const RobotsList = (): JSX.Element => {
  return (
    <RobotsListStyled>
      <li>
        <Robot />
      </li>
      <li>
        <Robot />
      </li>
      <li>
        <Robot />
      </li>
    </RobotsListStyled>
  );
};

export default RobotsList;

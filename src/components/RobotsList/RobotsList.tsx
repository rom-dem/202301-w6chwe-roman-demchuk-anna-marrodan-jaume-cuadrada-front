import { useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { useAppSelector } from "../../store/hooks";
import Robot from "../Robot/Robot";
import RobotsListStyled from "./RobotsListStyled";

const RobotsList = (): JSX.Element => {
  const { loadRobotsFromApi } = useApi();

  useEffect(() => {
    loadRobotsFromApi();
  }, [loadRobotsFromApi]);

  const robotsInfo = useAppSelector((state) => state.robots);

  return (
    <RobotsListStyled>
      {robotsInfo.map((robot) => (
        <li key={robot._id}>
          <Robot robot={robot} />
        </li>
      ))}
    </RobotsListStyled>
  );
};

export default RobotsList;

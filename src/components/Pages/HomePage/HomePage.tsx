import { useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import RobotsList from "../../RobotsList/RobotsList";

const HomePage = (): JSX.Element => {
  const { loadRobotsFromApi } = useApi();

  useEffect(() => {
    (async () => loadRobotsFromApi())();
  }, [loadRobotsFromApi]);

  return (
    <>
      <h2>Robot's list</h2>

      <RobotsList />
    </>
  );
};
export default HomePage;

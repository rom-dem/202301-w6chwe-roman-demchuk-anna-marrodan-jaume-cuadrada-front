import { useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import Robot from "../../Robot/Robot";

const HomePage = (): JSX.Element => {
  const { loadRobotsFromApi } = useApi();

  useEffect(() => {
    (async () => loadRobotsFromApi())();
  }, [loadRobotsFromApi]);

  return (
    <>
      <h2>Robot's list</h2>

      <Robot />
    </>
  );
};
export default HomePage;

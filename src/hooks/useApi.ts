import { useCallback } from "react";
import { loadRobotsActionCreator } from "../store/features/robots/robotsSlice";
import { useAppDispatch } from "../store/hooks";

const apiUrl = process.env.REACT_APP_API_URL!;
// const completeUrl = apiUrl + "/robots";

export const useApi = () => {
  const robotsDispatch = useAppDispatch();

  const loadRobotsFromApi = useCallback(async () => {
    const result = await fetch(`${apiUrl}/robots`);
    const robotsFromApi = await result.json();

    robotsDispatch(loadRobotsActionCreator(robotsFromApi));
  }, [robotsDispatch]);
  return { loadRobotsFromApi };
};

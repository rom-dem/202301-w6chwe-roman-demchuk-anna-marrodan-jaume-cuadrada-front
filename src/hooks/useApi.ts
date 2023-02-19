import { useCallback } from "react";
import { loadRobotsActionCreator } from "../store/features/robots/robotsSlice";
import { useAppDispatch } from "../store/hooks";

const apiUrl = process.env.REACT_APP_API_URL!;

export const useApi = () => {
  const robotsDispatch = useAppDispatch();

  const loadRobotsFromApi = useCallback(async () => {
    const result = await fetch(apiUrl);
    const robotsFromApi = await result.json();

    robotsDispatch(loadRobotsActionCreator(robotsFromApi.robots));
  }, [robotsDispatch]);
  return { loadRobotsFromApi };
};

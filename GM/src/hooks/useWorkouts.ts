import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_WORKOUTS } from "../constants/constants";
import Workout from "../models/Workout";
import workoutAPIClient from "../services/workoutService";
const useWorkouts = () => {
  return useQuery<Workout[], Error>({
    queryKey: CACHE_KEY_WORKOUTS,
    queryFn: workoutAPIClient.getAllMostRecentWorkouts,
  });
};

export default useWorkouts;

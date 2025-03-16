import Workout from "../models/Workout";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_WORKOUTS } from "../constants/constants";
import workoutService from "../services/workoutService";
const useWorkouts = () => {
  return useQuery<Workout[], Error>({
    queryKey: CACHE_KEY_WORKOUTS,
    queryFn: workoutService.getAllMostRecentWorkouts,
  });
};

export default useWorkouts;

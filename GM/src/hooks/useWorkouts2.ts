import axios from "axios";
import Workout from "../models/Workout";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_WORKOUTS } from "../constants/constants";
import workoutService from "../services/MOSHworkoutService";
const useWorkouts2 = () => {
  return useQuery<Workout[], Error>({
    // unique identifier, used for caching
    queryKey: CACHE_KEY_WORKOUTS,
    queryFn: workoutService.getAll,
    staleTime: 10, // 10s
  });
};

export default useWorkouts2;

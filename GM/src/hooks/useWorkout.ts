import axios from "axios";
import Workout from "../models/Workout";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_WORKOUTS } from "../constants/constants";
import workoutService from "../services/MOSHworkoutService";
import APIClient from "../services/MOSHapiClient";

const apiClient = new APIClient<Workout>("/workouts");

const useWorkout = (slug: string) => {
  return useQuery<Workout, Error>({
    // unique identifier, used for caching
    queryKey: ["workouts", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: 10, // 10s
  });
};
export default useWorkout;

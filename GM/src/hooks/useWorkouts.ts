import axios from "axios";
import Workout from "../models/Workout";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_WORKOUTS } from "../constants/constants";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Workout>("/workouts");
const useWorkouts = () => {
  return useQuery<Workout[], Error>({
    // unique identifier, used for caching
    queryKey: CACHE_KEY_WORKOUTS,
    queryFn: apiClient.getAll,
    staleTime: 10, // 10s
  });
};

export default useWorkouts;

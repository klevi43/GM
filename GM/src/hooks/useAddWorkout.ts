import { useMutation, useQueryClient } from "@tanstack/react-query";
import workoutService from "../services/workoutService";
import { CACHE_KEY_WORKOUTS } from "../constants/constants";
import { WorkoutFormData } from "../models/WorkoutFormData";
import Workout from "../models/Workout";

const useAddWorkout = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: workoutService.createWorkout,
    onSuccess: () => {
      queryClient.invalidateQueries(CACHE_KEY_WORKOUTS);
    },
  });
};
export default useAddWorkout;

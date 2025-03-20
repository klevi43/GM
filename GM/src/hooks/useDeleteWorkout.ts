import { useMutation, useQueryClient } from "@tanstack/react-query";
import workoutService from "../services/workoutService";
import { CACHE_KEY_WORKOUTS } from "../constants/constants";

const useDeleteWorkout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: workoutService.deleteWorkout,
    onSuccess: () => {
      queryClient.invalidateQueries(CACHE_KEY_WORKOUTS);
    },
  });
};
export default useDeleteWorkout;

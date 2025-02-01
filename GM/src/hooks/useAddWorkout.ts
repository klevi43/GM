import { useMutation, useQueryClient } from "@tanstack/react-query";
import Workout from "../models/Workout";
import axios from "axios";
import { CACHE_KEY_WORKOUTS } from "../constants/constants";
import workoutService from "../services/workoutService";

interface AddWorkoutContext {
  previousWorkouts: Workout[];
}
const useAddWorkout = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  //           data received from backed, error, data sent to backend
  return useMutation<Workout, Error, Workout, AddWorkoutContext>({
    mutationFn: workoutService.post,
    onMutate: (newWorkout: Workout) => {
      const previousWorkouts =
        queryClient.getQueryData<Workout[]>(CACHE_KEY_WORKOUTS) || [];
      queryClient.setQueryData<Workout[]>(
        CACHE_KEY_WORKOUTS,
        (workouts = []) => [newWorkout, ...workouts]
      );
      // we don't want any rendering logic in here,k so we will let the consumer of this hook handle that
      onAdd();
      // if (ref.current) ref.current.value = "";

      // context obj of previous workouts
      return { previousWorkouts };
    },
    // savedWorkout: from BE, newWorkout: workout we created
    onSuccess: (savedWorkout, newWorkout) => {
      queryClient.setQueryData<Workout[]>(CACHE_KEY_WORKOUTS, (workouts) =>
        workouts?.map((workout) =>
          workout === newWorkout ? savedWorkout : workout
        )
      );
    },
    onError: (error, newWorkout, context) => {
      if (!context) return;

      queryClient.setQueryData<Workout[]>(
        CACHE_KEY_WORKOUTS,
        context.previousWorkouts
      );
    },
  });
};

export default useAddWorkout;

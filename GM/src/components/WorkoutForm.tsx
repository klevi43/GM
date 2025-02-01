import React, { useRef } from "react";
import { Mutation, useMutation, useQueryClient } from "@tanstack/react-query";
import Workout from "../models/Workout";
import axios from "axios";
interface AddWorkoutContext {
  previousWorkouts: Workout[];
}
const WorkoutForm = () => {
  const queryClient = useQueryClient();
  //           data received from backed, error, data sent to backend
  const addWorkout = useMutation<Workout, Error, Workout, AddWorkoutContext>({
    mutationFn: (workout: Workout) => {
      return axios
        .post<Workout>("http://localhost:3500/workouts", workout)
        .then((res) => res.data);
    },
    onMutate: (newWorkout: Workout) => {
      const previousWorkouts =
        queryClient.getQueryData<Workout[]>(["workouts"]) || [];
      queryClient.setQueryData<Workout[]>(["workouts"], (workouts) => [
        newWorkout,
        ...(workouts || []),
      ]);
      if (ref.current) ref.current.value = "";

      // context obj of previous workouts
      return { previousWorkouts };
    },
    // savedWorkout: from BE, newWorkout: workout we created
    onSuccess: (savedWorkout, newWorkout) => {
      queryClient.setQueryData<Workout[]>(["workouts"], (workouts) =>
        workouts?.map((workout) =>
          workout === newWorkout ? savedWorkout : workout
        )
      );
    },
    onError: (error, newWorkout, context) => {
      if (!context) return;

      queryClient.setQueryData<Workout[]>(
        ["workouts"],
        context.previousWorkouts
      );
    },
  });

  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      {addWorkout.error && (
        <div className="outline workout__list-item">
          <p className="text text-error center">{addWorkout.error.message}</p>
        </div>
      )}
      <form
        action=""
        onSubmit={(event) => {
          // prevents form from being sent to server
          event.preventDefault();
          if (ref.current && ref.current.value) {
            addWorkout.mutate({
              id: 4,
              name: ref.current?.value,
              date: new Date(),
            });
          }
        }}
      >
        <div>
          <input ref={ref} type="text" />
        </div>
        <div>
          <button disabled={addWorkout.isLoading} className="btn btn--primary">
            {addWorkout.isLoading ? " Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default WorkoutForm;

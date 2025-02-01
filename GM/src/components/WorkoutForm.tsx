import React, { useRef } from "react";
import { Mutation, useMutation, useQueryClient } from "@tanstack/react-query";
import Workout from "../models/Workout";
import axios from "axios";
const WorkoutForm = () => {
  const queryClient = useQueryClient();
  //           data received from backed, error, data sent to backend
  const addWorkout = useMutation<Workout, Error, Workout>({
    mutationFn: (workout: Workout) => {
      return axios
        .post<Workout>("http://localhost:3500/workouts", workout)
        .then((res) => res.data);
    },
    onMutate: (newWorkout: Workout) => {
      queryClient.setQueryData<Workout[]>(["workouts"], (workouts) => [
        newWorkout,
        ...(workouts || []),
      ]);
      if (ref.current) ref.current.value = "";
    },
    onSuccess: (savedWorkout, newWorkout) => {},
    // APPROACHES: INVALIDATE CACHE, update data in cache directly
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

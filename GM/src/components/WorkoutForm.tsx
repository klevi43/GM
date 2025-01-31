import React, { useRef } from "react";
import { Mutation, useMutation, useQueryClient } from "@tanstack/react-query";
import Workout from "../models/Workout";
import axios from "axios";
const WorkoutForm = () => {
  const queryClient = useQueryClient();
  const addWorkout = useMutation({
    mutationFn: (workout: Workout) => {
      return axios
        .post<Workout>("http://localhost:3500/workouts", workout)
        .then((res) => res.data);
    },
    onSuccess: (savedWorkout, newWorkout) =>
      // APPROACHES: INVALIDATE CACHE, update data in cache directly
      queryClient.setQueryData<Workout[]>(["workouts"], (workouts) => [
        ...(workouts || []),
      ]),
  });
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
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
          <button className="btn btn--primary">Add</button>
        </div>
      </form>
    </>
  );
};

export default WorkoutForm;

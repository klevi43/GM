import React from "react";
import { useContext } from "react";
import WorkoutsContext from "../context/WorkoutsProvider";
import { UseWorkoutsContextType } from "../context/WorkoutsProvider";
import axios from "axios";
import Workout from "../models/Workout";
import { useQuery } from "@tanstack/react-query";

const useWorkouts = (workoutId: number | undefined) => {
  const fetchWorkouts = () => {
    return axios
      .get<Workout[]>("http://localhost:3500/workouts", {
        params: {
          workoutId,
        },
      })
      .then((res) => res.data);
  };
  return useQuery<Workout[], Error>({
    // unique identifier, used for caching
    queryKey: ["workouts", workoutId],
    queryFn: fetchWorkouts,
    staleTime: 10 * 1000, // 10s
  });
};

export default useWorkouts;

import React from "react";
import { useContext } from "react";
import WorkoutsContext from "../context/WorkoutsProvider";
import { UseWorkoutsContextType } from "../context/WorkoutsProvider";
import axios from "axios";
import Workout from "../models/Workout";
import { useQuery } from "@tanstack/react-query";

const useWorkouts = () => {
  const fetchWorkouts = () => {
    return axios
      .get<Workout[]>("http://localhost:3500/workouts")
      .then((res) => res.data);
  };
  return useQuery<Workout[], Error>({
    // unique identifier, used for caching
    queryKey: ["id", "name", "date"],
    queryFn: fetchWorkouts,
    staleTime: 10 * 1000, // 10s
  });
};

export default useWorkouts;

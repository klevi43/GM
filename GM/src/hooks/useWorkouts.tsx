import React from "react";
import { useContext } from "react";
import WorkoutsContext from "../context/WorkoutsProvider";
import { UseWorkoutsContextType } from "../context/WorkoutsProvider";
const useWorkouts = (): UseWorkoutsContextType => {
  return useContext(WorkoutsContext);
};

export default useWorkouts;

import React, { useRef } from "react";
import { Mutation, useMutation, useQueryClient } from "@tanstack/react-query";
import Workout from "../models/Workout";
import axios from "axios";
const WorkoutForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <form action="">
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

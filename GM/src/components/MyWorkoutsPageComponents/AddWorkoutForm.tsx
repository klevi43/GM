import React, { FormEvent, useRef } from "react";
import Workout from "../../models/Workout";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import workoutService from "../../services/workoutService";
import { CACHE_KEY_WORKOUTS } from "../../constants/constants";

interface Props {
  showFormHandler(): void;
}
export interface WorkoutFormData {
  name: string | undefined;
  date: string | undefined;
}
const AddWorkoutForm = ({ showFormHandler }: Props) => {
  const workoutNameRef = useRef<HTMLInputElement>(null);
  const workoutDateRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(workoutService.createWorkout, {
    onSuccess: () => {
      queryClient.invalidateQueries(CACHE_KEY_WORKOUTS);
    },
  });

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault(); // prevents rerender

    console.log(workoutNameRef.current?.value);
    console.log(workoutDateRef.current?.value);

    const data: WorkoutFormData = {
      name: workoutNameRef.current?.value,
      date: workoutDateRef.current?.value,
    };
    mutateAsync(data);
    console.log(typeof workoutDateRef.current?.value);
  }
  return (
    <>
      <div className="outline form__container">
        <form onSubmit={handleSubmit} className="">
          <div>
            <div>
              <label htmlFor="workout-name" className="text">
                Workout Name
              </label>
              <input ref={workoutNameRef} name="workout-name" type="text" />
            </div>
            <div>
              <label htmlFor="workout-date" className="text">
                Date Completed
              </label>
              <input ref={workoutDateRef} name="workout-date" type="date" />
            </div>
          </div>

          <div className="form__submit-container">
            <button className="btn btn--empty" onClick={showFormHandler}>
              Cancel
            </button>
            <button className="btn btn--primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddWorkoutForm;

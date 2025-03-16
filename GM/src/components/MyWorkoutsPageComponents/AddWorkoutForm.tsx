import React from "react";
import Workout from "../../models/Workout";
import { useMutation } from "@tanstack/react-query";
import workoutService from "../../services/workoutService";

interface Props {
  showFormHandler(): void;
}

const AddWorkoutForm = ({ showFormHandler }: Props) => {
  const { mutateAsync } = useMutation({
    mutationFn: workoutService.createWorkout,
  });

  return (
    <>
      <div className="outline form__container">
        <form action="" className="">
          <div>
            <div>
              <label htmlFor="workout-name" className="text">
                Workout Name
              </label>
              <input id="workout-name" type="text" />
            </div>
            <div>
              <label htmlFor="workout-date" className="text">
                Date Completed
              </label>
              <input id="workout-date" type="date" />
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

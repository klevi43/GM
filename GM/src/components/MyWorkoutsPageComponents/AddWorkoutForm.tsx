import React, { FormEvent, useRef } from "react";
import { WorkoutFormData } from "../../models/WorkoutFormData";
import useAddWorkout from "../../hooks/useAddWorkout";

interface Props {
  showFormHandler(): void;
}

const AddWorkoutForm = ({ showFormHandler }: Props) => {
  // TODO: See if there is anything else we can clean up

  const workoutNameRef = useRef<HTMLInputElement>(null);
  const workoutDateRef = useRef<HTMLInputElement>(null);
  const addWorkout = useAddWorkout(() => {});
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault(); // prevents rerender

    const data: WorkoutFormData = {
      name: workoutNameRef.current?.value,
      date: workoutDateRef.current?.value,
    };
    addWorkout.mutate(data);
    // remove form handler
    showFormHandler();
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

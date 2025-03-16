import React from "react";

interface Props {
  showFormHandler(): void;
}
const ShowAddWorkoutFormButton = ({ showFormHandler }: Props) => {
  return (
    <div className="center">
      <button
        onClick={showFormHandler}
        className="btn btn--primary btn--wide text--small"
      >
        Add New Workout
      </button>
    </div>
  );
};

export default ShowAddWorkoutFormButton;

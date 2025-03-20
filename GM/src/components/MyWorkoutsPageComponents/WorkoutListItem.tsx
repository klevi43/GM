import React from "react";
import Workout from "../../models/Workout";
import Exercise from "../../models/Exercise";
import { Link } from "react-router";
import ExerciseListPreview from "./ExercisePreview";
import TrashCan from "../../assets/svgs/trashcan-svgrepo-com.svg";
import useDeleteWorkout from "../../hooks/useDeleteWorkout";

interface Props {
  workoutId: number;
  workoutName: string;
  workoutDate: Date;
  exercises?: Exercise[];
}
const WorkoutListItem = ({
  workoutId,
  workoutName,
  workoutDate,
  exercises,
}: Props) => {
  const deleteWorkoutMutation = useDeleteWorkout();
  function handleDelete() {
    deleteWorkoutMutation.mutate(workoutId);
  }

  return (
    <>
      <li key={workoutId} className="outline workout__list-item">
        <div className="space-between">
          <Link className="link text" to={`/workouts/${workoutId}`}>
            <h2>{workoutName}</h2>
          </Link>
          <button className="btn btn--delete text" onClick={handleDelete}>
            X
          </button>
        </div>
        <div className="space-between workout-list__content">
          <ExerciseListPreview exercises={exercises} />

          <p className="workout-list__date">{workoutDate.toString()}</p>
        </div>
      </li>
    </>
  );
};

export default WorkoutListItem;

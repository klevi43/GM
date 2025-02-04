import React from "react";
import Workout from "../../models/Workout";
import Exercise from "../../models/Exercise";
import { Link } from "react-router";
import ExerciseListPreview from "./ExercisePreview";
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
  return (
    <>
      <li key={workoutId} className="outline workout__list-item">
        <Link className="link text" to={`/workouts/${workoutId}`}>
          <div className="space-between">
            <h2>{workoutName}</h2>
            <button className="btn btn-primary text link">X</button>
          </div>
          <div className="space-between workout-list__content">
            <ExerciseListPreview exercises={exercises} />
            <p className="workout-list__date">{workoutDate.toString()}</p>
          </div>
        </Link>
      </li>
    </>
  );
};

export default WorkoutListItem;

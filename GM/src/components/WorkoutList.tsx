import React from "react";
import Workout from "../models/Workout";
import { Link } from "react-router";

interface Props {
  workouts: Workout[] | null;
}
const WorkoutList = ({ workouts }: Props) => {
  return (
    <ul className="list">
      {!workouts && <p>Nothing to show</p>}
      {workouts &&
        workouts.map((workout) => (
          <li>
            <Link to="/">{workout.name}</Link>
          </li>
        ))}
    </ul>
  );
};

export default WorkoutList;

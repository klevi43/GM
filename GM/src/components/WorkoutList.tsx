import React from "react";
import Workout from "../models/Workout";
import { Link } from "react-router";

interface Props {
  workouts?: Workout[];
  handleDelete(id: number): void;
}
const WorkoutList = ({ workouts, handleDelete }: Props) => {
  return (
    <>
      <ul className="list">
        {!workouts && <p>Nothing to show</p>}
        {workouts &&
          workouts.map((workout) => (
            <li className="outline workout__list-item">
              <div className="space-between">
                <Link className="link text" to={`/workouts/${workout.id}`}>
                  <h2>{workout.name}</h2>
                </Link>
                <button
                  onClick={() => handleDelete(workout.id)}
                  className="btn btn-primary text link"
                >
                  X
                </button>
              </div>
              <div className="space-between workout-list__content">
                <ul className="list">
                  <li>Bench Press</li>
                  <li>Pushups</li>
                  <li>...</li>
                </ul>
                <p className="text">{workout.date.toLocaleDateString()}</p>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default WorkoutList;

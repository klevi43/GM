import React from "react";
import Workout from "../models/Workout";
import { Link } from "react-router";

interface Props {
  workouts?: Workout[];
  error: Error | null;
  isLoading: boolean;
  handleDelete(id: number): void;
}
const WorkoutList = ({ workouts, error, isLoading, handleDelete }: Props) => {
  return (
    <>
      {!error && !isLoading && !workouts && (
        <div>
          <p className="text center">Nothing to show</p>
        </div>
      )}
      {isLoading && (
        <div className="outline workout__list-item">
          <p className="text center ">Loading your workouts...</p>
        </div>
      )}
      {error && (
        <div className="outline workout__list-item">
          <p className="text text-error center ">{error.message}</p>
        </div>
      )}
      <ul className="list">
        {workouts &&
          workouts.map((workout) => (
            <li key={workout.id} className="outline workout__list-item">
              <Link className="link text" to={`/workouts/${workout.id}`}>
                <div className="space-between">
                  <h2>{workout.name}</h2>
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
                  <p className="workout-list__date">
                    {workout.date.toString()}
                  </p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default WorkoutList;

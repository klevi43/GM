import React from "react";
import Workout from "../models/Workout";
import { Link } from "react-router";
import WorkoutListItem from "./WorkoutListItem";

interface Props {
  workouts?: Workout[];
  error: Error | null;
  isLoading: boolean;
  workoutId?: number;
  handleDelete(id: number): void;
}
const WorkoutList = ({
  workouts,
  error,
  isLoading,
  workoutId,
  handleDelete,
}: Props) => {
  return (
    <>
      {!error && !isLoading && !workouts && (
        <div>
          <p className="text center">Nothing to show</p>
        </div>
      )}
      {isLoading && (
        <div className="outline workout__list-item">
          <p className="text center">Loading your workouts...</p>
        </div>
      )}
      {error && (
        <div className="outline workout__list-item">
          <p className="text text-error center">{error.message}</p>
        </div>
      )}
      <ul className="list">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutListItem
              workoutId={workout.id}
              workoutName={workout.name}
              workoutDate={workout.date}
              exercises={workout.exercises}
            />
          ))}
      </ul>
    </>
  );
};

export default WorkoutList;

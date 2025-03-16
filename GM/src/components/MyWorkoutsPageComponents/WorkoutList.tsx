import React, { useState } from "react";
import Workout from "../../models/Workout";
import { Link } from "react-router";
import WorkoutListItem from "./WorkoutListItem";
import ErrorMessage from "../Messages/ErrorMessage";
import IsLoadingMessage from "../Messages/IsLoadingMessage";
import IsEmptyMessage from "../Messages/IsEmptyMessage";

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
      {!error && !isLoading && !workouts && <IsEmptyMessage />}
      {isLoading && <IsLoadingMessage />}
      {error && <ErrorMessage msg={error.message} />}
      <ul className="list">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutListItem
              key={workout.id}
              workoutId={workout.id}
              workoutName={workout.name}
              workoutDate={workout.date}
              exercises={workout.exerciseDtos}
            />
          ))}
      </ul>
    </>
  );
};

export default WorkoutList;

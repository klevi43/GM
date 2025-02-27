import React, { useState } from "react";
import Nav from "../components/Nav";
import TrashCan from "../assets/svgs/trashcan-svgrepo-com.svg";
import ExerciseTitle from "../components/WorkoutExercises/ExerciseTitle";
import SetTable from "../components/WorkoutExercises/SetTable";
import useWorkout from "../hooks/useWorkout";
import { useParams } from "react-router";
import WorkoutTitle from "../components/WorkoutExercises/WorkoutTitle";
import Exercise from "../models/Exercise";
import Set from "../models/Set";
import ExerciseEntry from "../components/WorkoutExercises/ExerciseEntry";

const Workout = () => {
  const { id } = useParams();
  const { data: workout, isLoading, error } = useWorkout(id!);
  console.log(workout);
  const exercises: Exercise[] | undefined = workout?.exercises;

  return (
    <>
      <Nav />
      <WorkoutTitle name={workout?.name} />
      {exercises?.map((exercise) => (
        <ExerciseEntry
          key={exercise.id}
          name={exercise.name}
          sets={exercise.sets}
        />
      ))}
      <div className="table__btn-container">
        <button className="btn btn--primary table__btn">Add Exercise</button>
      </div>
      <div className="container table__container ">
        <div className="">
          <h2 className="subheading table__exercise">Bench Press</h2>
        </div>
        <div className="">
          <table className="table">
            <thead>
              <tr className="">
                <th className="table__column-heading">Set</th>
                <th className="table__column-heading">Weight</th>
                <th className="table__column-heading">Reps</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="table--underline">
                <td className="table__item table__column-value">1</td>
                <td className="table__item table__column-value">15</td>
                <td className="table__item table__column-value">12</td>
                <td className="table__item">
                  <button>
                    <img className="trash-icon" src={TrashCan} alt="" />
                  </button>
                </td>
              </tr>
              <tr className="">
                <td className="table__item table__column-value">2</td>
                <td className="table__item table__column-value">20</td>
                <td className="table__item table__column-value">8</td>
                <td className="table__item">
                  <button>
                    <img className="trash-icon" src={TrashCan} alt="" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table__btn-container">
          <button className="btn btn--outline table__btn">Add Set</button>
        </div>
      </div>
      <div className="table__btn-container">
        <button className="btn btn--primary table__btn">Add Exercise</button>
      </div>
    </>
  );
};

export default Workout;

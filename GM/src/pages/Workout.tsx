import React, { useState } from "react";
import Nav from "../components/Nav";
import TrashCan from "../assets/svgs/trashcan-svgrepo-com.svg";
import ExerciseTitle from "../components/WorkoutExercises/ExerciseTitle";
import ExerciseTable from "../components/WorkoutExercises/ExerciseTable";
import useWorkout from "../hooks/useWorkout";
import { useParams } from "react-router";

const Workout = () => {
  const { id } = useParams();
  const { data: workout, isLoading, error } = useWorkout(id!);
  console.log(workout);
  return (
    <>
      <Nav />
      <header className="nav__offset">
        <h1 className="heading heading__workout">Chest Day</h1>
      </header>
      <div className="container table__container ">
        <div className="">
          <tr>
            <td className="table__item table__column-value">2</td>
            <td className="table__item table__column-value">20</td>
            <td className="table__item table__column-value">8</td>
            <td className="table__item">
              <button>
                <img className="trash-icon" src={TrashCan} alt="" />
              </button>
            </td>
          </tr>
        </div>
        <div className="table__btn-container">
          <button className="btn btn--outline table__btn">Add Set</button>
        </div>
      </div>
      <div className="container table__container ">
        <div className="">
          <h2 className="subheading table__exercise">Bench Press</h2>
        </div>
        <div className="">
          <table className="table">
            <tr className="">
              <th className="table__column-heading">Set</th>
              <th className="table__column-heading">Weight</th>
              <th className="table__column-heading">Reps</th>
              <th></th>
            </tr>
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

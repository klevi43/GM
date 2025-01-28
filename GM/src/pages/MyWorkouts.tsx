import React, { ReactElement, ReactNode } from "react";
import Nav from "../components/Nav";
import { Link } from "react-router";
import { useState } from "react";
import Workout from "../models/Workout";
import List from "../components/WorkoutList";

import useWorkouts from "../hooks/useWorkouts";
import { UseWorkoutsContextType } from "../context/WorkoutsProvider";
const Workouts = () => {
  const workoutList: Workout[] = [
    new Workout(0, "Chest Day", new Date(2024, 12, 25)),
    new Workout(1, "Leg Day", new Date(2024, 12, 25)),
  ];
  const [workoutsArr, setWorkoutList] = useState(workoutList);

  // const { workouts } = useWorkouts();
  // let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>

  // if (workouts?.length) {
  //   pageContent = workouts.map( workout => )
  // }

  const handleDelete = (id: number) => {
    const updatedWorkouts = workoutsArr.filter((workout) => id !== workout.id);
    setWorkoutList(updatedWorkouts);
  };
  return (
    <>
      <Nav />

      <header className="nav__offset">
        <h1 className="heading">My Workouts</h1>
      </header>
      <div className="container workout__container">
        <List workouts={workoutsArr} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default Workouts;

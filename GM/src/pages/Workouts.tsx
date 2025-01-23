import React, { ReactNode } from "react";
import Nav from "../components/Nav";
import { Link } from "react-router";
import { useState } from "react";
import Workout from "../models/Workout";
import List from "../components/WorkoutList";
const Workouts = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const workoutList: Workout[] = [
    new Workout(0, "Chest Day", new Date(2024, 12, 25)),
    new Workout(1, "Leg Day", new Date(2024, 12, 25)),
  ];
  const [workouts, setWorkoutList] = useState(workoutList);
  const workoutListStyles = {
    ul: "list",
    li: "outline workout__list-item",
    link: "link text",
  };
  const toggleNavBar = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  const handleDelete = (id: number) => {
    const updatedWorkouts = workouts.filter((workout) => id !== workout.id);
    setWorkoutList(updatedWorkouts);
  };
  return (
    <>
      <Nav
        isNavMenuOpen={isNavMenuOpen}
        toggleNavBar={toggleNavBar}
        isLoggedIn={isLoggedIn}
      />

      <header className="nav__offset">
        <h1 className="heading">My Workouts</h1>
      </header>
      <div className="container workout__container">
        <List
          workouts={workouts}
          styles={workoutListStyles}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default Workouts;

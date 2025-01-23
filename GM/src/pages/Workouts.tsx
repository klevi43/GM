import React, { ReactNode } from "react";
import Nav from "../components/Nav";
import { Link } from "react-router";
import { useState } from "react";
import Workout from "../models/Workout";
import List from "../components/List";
const Workouts = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const workoutListStyles = {
    ul: "list",
    li: "outline workout__list-item",
    link: "link text",
  };
  const toggleNavBar = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };
  const workouts: Workout[] = [
    new Workout("Chest Day", new Date(2024, 12, 25)),
    new Workout("Leg Day", new Date(2024, 12, 25)),
  ];

  return (
    <>
      <Nav
        isNavMenuOpen={isNavMenuOpen}
        toggleNavBar={toggleNavBar}
        isLoggedIn={isLoggedIn}
      />

      <header className="nav__offset">
        <h1 className="heading form__heading">My Workouts</h1>
      </header>
      <div className="container">
        <List workouts={workouts} styles={workoutListStyles} />
        {/* <ul className="list">
          {workouts.map((workout: Workout) => (
            <li className="outline workout__list-item">
              <Link className="link text" to="/">
                <div className="space-between">
                  <h2>{workout.name}</h2>
                  <p>12/25/2025</p>
                </div>
                <ul className="list">
                  <li>Bench Press</li>
                  <li>Pushups</li>
                  <li>...</li>
                </ul>
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
};

export default Workouts;

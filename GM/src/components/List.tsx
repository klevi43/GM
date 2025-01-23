import React from "react";
import Workout from "../models/Workout";
import { Link } from "react-router";

interface Props {
  workouts?: Workout[];
  styles: {
    ul?: string;
    li?: string;
    link?: string;
  };
}
const WorkoutList = ({ workouts, styles }: Props) => {
  return (
    <>
      <ul className={styles.ul}>
        {!workouts && <p>Nothing to show</p>}
        {workouts &&
          workouts.map((workout) => (
            <li className={styles.li}>
              <Link className={styles.link} to="/">
                <div className="space-between">
                  <h2>{workout.name}</h2>
                  <p>{workout.date.toLocaleDateString()}</p>
                </div>
                <ul className="list">
                  <li>Bench Press</li>
                  <li>Pushups</li>
                  <li>...</li>
                </ul>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default WorkoutList;

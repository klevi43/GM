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
  handleDelete(id: number): void;
}
const WorkoutList = ({ workouts, styles, handleDelete }: Props) => {
  return (
    <>
      <ul className={styles.ul}>
        {!workouts && <p>Nothing to show</p>}
        {workouts &&
          workouts.map((workout) => (
            <li className={styles.li}>
              <div className="space-between">
                <Link className={styles.link} to="/">
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
                <ul className={styles.ul}>
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

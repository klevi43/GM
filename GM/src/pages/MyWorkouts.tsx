import { useState } from "react";
import Nav from "../components/Nav";
import WorkoutList from "../components/MyWorkoutsPageComponents/WorkoutList";
import useWorkouts from "../hooks/useWorkouts";
import WorkoutForm from "../components/WorkoutForm";
import Button from "../components/Button";

const MyWorkouts = () => {
  const [workoutId, setWorkoutId] = useState<number>();

  const { data: workouts, error, isLoading } = useWorkouts();

  const handleDelete = (id: number) => {
    // const updatedWorkouts = workoutsArr.filter((workout) => id !== workout.id);
    // setWorkoutList(updatedWorkouts);
  };

  return (
    <>
      <Nav />
      <header className="nav__offset">
        <h1 className="heading heading__my-workout">My Workouts</h1>
      </header>
      {/* <WorkoutForm /> */}

      <div className="container workout__container">
        <div className="center">
          <button className="btn btn--primary btn--wide text--small">
            Add New Workout
          </button>
        </div>
        <WorkoutList
          workouts={workouts}
          error={error}
          workoutId={workoutId}
          isLoading={isLoading}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default MyWorkouts;

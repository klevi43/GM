import { useState } from "react";
import Nav from "../components/Nav";
import WorkoutList from "../components/MyWorkoutsPageComponents/WorkoutList";
import useWorkouts from "../hooks/useWorkouts";
import WorkoutForm from "../components/WorkoutForm";
import Button from "../components/Button";
import ShowAddWorkoutFormButton from "../components/MyWorkoutsPageComponents/ShowAddWorkoutFormButton";
import AddWorkoutForm from "../components/MyWorkoutsPageComponents/AddWorkoutForm";

const MyWorkouts = () => {
  const [workoutId, setWorkoutId] = useState<number>();

  const { data: workouts, error, isLoading } = useWorkouts();
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(!showForm);
    console.log(showForm);
  };
  return (
    <>
      <Nav />
      <header className="nav__offset">
        <h1 className="heading heading__my-workout">My Workouts</h1>
      </header>
      {/* <WorkoutForm /> */}

      <div className="container workout__container">
        {!showForm && (
          <ShowAddWorkoutFormButton showFormHandler={showFormHandler} />
        )}
        {showForm && <AddWorkoutForm showFormHandler={showFormHandler} />}
        <WorkoutList
          workouts={workouts}
          error={error}
          workoutId={workoutId}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default MyWorkouts;

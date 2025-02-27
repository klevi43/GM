import { useState } from "react";
import Nav from "../components/Nav";
import WorkoutList from "../components/WorkoutsPageComponents/WorkoutList";
import useWorkouts from "../hooks/useWorkouts";
import WorkoutForm from "../components/WorkoutForm";

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
        <h1 className="heading">My Workouts</h1>
      </header>
      <WorkoutForm />
      <div className="container workout__container">
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

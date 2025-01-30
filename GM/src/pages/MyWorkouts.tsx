import Nav from "../components/Nav";
import WorkoutList from "../components/WorkoutList";
import useWorkouts from "../hooks/useWorkouts";

const MyWorkouts = () => {
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

      <div className="container workout__container">
        <WorkoutList
          workouts={workouts}
          error={error}
          isLoading={isLoading}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default MyWorkouts;

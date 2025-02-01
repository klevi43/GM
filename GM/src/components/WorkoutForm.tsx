import { useRef } from "react";
import useAddWorkout from "../hooks/useAddWorkout";

const WorkoutForm = () => {
  const addWorkout = useAddWorkout(() => {
    if (ref.current) ref.current.value = "";
  });

  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      {addWorkout.error && (
        <div className="outline workout__list-item">
          <p className="text text-error center">{addWorkout.error.message}</p>
        </div>
      )}
      <form
        action=""
        onSubmit={(event) => {
          // prevents form from being sent to server
          event.preventDefault();
          if (ref.current && ref.current.value) {
            addWorkout.mutate({
              id: 4,
              name: ref.current?.value,
              date: new Date(),
            });
          }
        }}
      >
        <div>
          <input ref={ref} type="text" />
        </div>
        <div>
          <button disabled={addWorkout.isLoading} className="btn btn--primary">
            {addWorkout.isLoading ? " Adding..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default WorkoutForm;

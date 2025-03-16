import React from "react";
import Exercise from "../../models/Exercise";
interface Props {
  exercises?: Exercise[];
}
const ExerciseListPreview = ({ exercises }: Props) => {
  return (
    <>
      <ul className="list">
        {exercises?.slice(0, 2).map((exercise) => (
          <li key={exercise.id}> {exercise.name}</li>
        ))}
        {exercises && exercises.length > 2 && <li>...</li>}
      </ul>
    </>
  );
};

export default ExerciseListPreview;

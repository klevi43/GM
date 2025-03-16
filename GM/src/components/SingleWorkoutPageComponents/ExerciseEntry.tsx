import React from "react";
import Exercise from "../../models/Exercise";
import ExerciseTitle from "./ExerciseTitle";
import SetTable from "./SetTable";
import Set from "../../models/Set";
interface Props {
  name: string;
  sets?: Set[];
}
const ExerciseEntry = ({ name, sets }: Props) => {
  return (
    <div className="container table__container">
      <ExerciseTitle name={name} />
      <SetTable sets={sets} />
    </div>
  );
};

export default ExerciseEntry;

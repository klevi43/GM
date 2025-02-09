import React from "react";
interface Props {
  name: string | undefined;
}
const ExerciseTitle = ({ name }: Props) => {
  return (
    <div>
      <h2 className="subheading table__exercise">{name}</h2>
    </div>
  );
};

export default ExerciseTitle;

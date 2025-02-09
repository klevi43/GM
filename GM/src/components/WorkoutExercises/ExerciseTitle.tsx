import React from "react";
interface Props {
  name: string | undefined;
}
const ExerciseTitle = ({ name }: Props) => {
  return (
    <>
      <h2 className="subheading table__exercise">{name}</h2>
    </>
  );
};

export default ExerciseTitle;

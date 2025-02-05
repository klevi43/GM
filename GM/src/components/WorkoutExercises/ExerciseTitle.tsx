import React from "react";
interface Props {
  title: string;
}
const ExerciseTitle = ({ title }: Props) => {
  return (
    <div>
      <h2 className="subheading table__exercise">{title}</h2>
    </div>
  );
};

export default ExerciseTitle;

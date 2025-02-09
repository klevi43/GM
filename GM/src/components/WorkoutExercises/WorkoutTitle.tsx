import React from "react";

interface Props {
  name: string | undefined;
}
const WorkoutTitle = ({ name }: Props) => {
  return (
    <header className="nav__offset">
      <h1 className="heading heading__workout">{name}</h1>
    </header>
  );
};

export default WorkoutTitle;

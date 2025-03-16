import React from "react";

interface Props {
  msg: string;
}
const ErrorMessage = ({ msg }: Props) => {
  return (
    <div className="outline workout__list-item">
      <p className="text text-error center">{msg}</p>
    </div>
  );
};

export default ErrorMessage;

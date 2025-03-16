import React from "react";
import TrashCan from "../../assets/svgs/trashcan-svgrepo-com.svg";
import Workout from "../../models/Workout";
import Set from "../../models/Set";
import SetTableHead from "./SetTableHead";
interface Props {
  sets: Set[] | undefined;
}
const ExerciseTable = ({ sets }: Props) => {
  return (
    <>
      <div>
        <table className="table">
          <SetTableHead />
          <tbody>
            {sets?.map((set, no = 0) => (
              <React.Fragment key={set.id}>
                <tr>
                  <td className="table__item table__column-value">{++no}</td>
                  <td className="table__item table__column-value">
                    {set.weight}
                  </td>
                  <td className="table__item table__column-value">
                    {set.reps}
                  </td>
                  <td className="table__item">
                    <button>
                      <img className="trash-icon" src={TrashCan} alt="" />
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <div className="table__btn-container">
          <button className="btn btn--outline table__btn">Add Set</button>
        </div>
      </div>
    </>
  );
};

export default ExerciseTable;

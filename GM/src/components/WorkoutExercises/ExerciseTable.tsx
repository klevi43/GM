import React from "react";
import TrashCan from "../../assets/svgs/trashcan-svgrepo-com.svg";
import Workout from "../../models/Workout";
import Set from "../../models/Set";
import ExerciseTableHead from "./ExerciseTableHead";
interface Props {
  sets: Set[] | undefined;
  exerciseId: number | undefined;
}
const ExerciseTable = ({ sets, exerciseId }: Props) => {
  return (
    <>
      <div>
        <table className="table" key={exerciseId}>
          <ExerciseTableHead />
          <tbody>
            {sets?.map((set, no = 0) => (
              <>
                <tr key={set.id}>
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
              </>
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

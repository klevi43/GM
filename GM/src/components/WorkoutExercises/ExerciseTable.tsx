import React from "react";
import TrashCan from "../../assets/svgs/trashcan-svgrepo-com.svg";

const ExerciseTable = () => {
  return (
    <>
      <table className="table">
        <tr className="">
          <th className="table__column-heading">Set No</th>
          <th className="table__column-heading">Weight</th>
          <th className="table__column-heading">Reps</th>
          <th></th>
        </tr>
        <tr>
          <td className="table__item table__column-value">1</td>
          <td className="table__item table__column-value">50</td>
          <td className="table__item table__column-value">10</td>
          <td className="table__item">
            <button>
              <img className="trash-icon" src={TrashCan} alt="" />
            </button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default ExerciseTable;

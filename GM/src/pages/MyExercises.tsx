import React, { useState } from "react";
import Nav from "../components/Nav";
import TrashCan from "../assets/svgs/trashcan-svgrepo-com.svg";
const MyExercises = () => {
  return (
    <>
      <Nav />
      <header className="nav__offset">
        <h1 className="heading">WORKOUT TITLE</h1>
      </header>
      <div className="container outline">
        <div className="">
          <h2 className="subheading">EXERCISE TITLE</h2>
        </div>
        <div className="">
          <table className="outline table">
            <tr className="">
              <th className="table__column-heading">Set</th>
              <th className="table__column-heading">Weight</th>
              <th className="table__column-heading">Reps</th>
              <th></th>
            </tr>
            <tr>
              <td className="table__item table__column-value">1</td>
              <td className="table__item table__column-value">15</td>
              <td className="table__item table__column-value">12</td>
              <td className="table__item">
                <button>
                  <img className="trash-icon" src={TrashCan} alt="" />
                </button>
              </td>
            </tr>
          </table>
        </div>
        <div>
          <button className="btn btn--primary">Add</button>
          <button className="btn btn--primary">Delete</button>
        </div>
      </div>
    </>
  );
};

export default MyExercises;

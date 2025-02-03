import React, { useState } from "react";
import Nav from "../components/Nav";

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
              <th>Set</th>
              <th>Weight</th>
              <th>Reps</th>
            </tr>
            <tr>
              <td className="table__item">1</td>
              <td className="table__item">15</td>
              <td className="table__item">12</td>
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

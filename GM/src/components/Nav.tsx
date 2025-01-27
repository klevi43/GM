import React from "react";

import Lines from "../assets/svgs/lines.svg";
import { NavLink } from "react-router";
import Home from "../pages/Home";

interface Props {
  isNavMenuOpen: boolean;
  isLoggedIn: boolean;
  toggleNavBar: () => void;
}
const Nav = ({ isNavMenuOpen, toggleNavBar, isLoggedIn }: Props) => {
  return (
    <>
      <div className="nav__container">
        <nav className="nav">
          <NavLink className="logo" to="/">
            GM<span className="logo-desktop">Growth Mindset</span>
          </NavLink>
          <button onClick={toggleNavBar} className="nav__toggle">
            <img src={Lines} alt="" />
          </button>

          <ul
            className={`list nav__list ${
              isNavMenuOpen ? "collapsible--expanded" : "collapsible--hidden"
            }`}
          >
            {!isLoggedIn && (
              <li className="nav__item">
                <NavLink className="link text" to="/login">
                  Login
                </NavLink>
              </li>
            )}

            {isLoggedIn && (
              <li className="nav__item">
                <NavLink className="link text" to="/logout">
                  Logout
                </NavLink>
              </li>
            )}
            <li className="nav__item">
              <NavLink className="link text" to="/workouts">
                My Workouts
              </NavLink>
              <div className="underline"></div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;

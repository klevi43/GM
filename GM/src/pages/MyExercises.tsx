import React, { useState } from "react";
import Nav from "../components/Nav";

const MyExercises = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleNavBar = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };
  return (
    <>
      <Nav />
    </>
  );
};

export default MyExercises;

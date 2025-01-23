import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./fonts/Jost.ttf";

import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Workouts from "./pages/Workouts";
import WorkoutExercises from "./pages/WorkoutExercises";

function App() {
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path={`/workouts/${0}`} element={<WorkoutExercises />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;

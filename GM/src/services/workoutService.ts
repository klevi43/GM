import Workout from "../models/Workout";
import APIClient from "./apiClient";

export default new APIClient<Workout>("/workouts");

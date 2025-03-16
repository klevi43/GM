import Workout from "../models/Workout";
import APIClient from "./MOSHapiClient";

export default new APIClient<Workout>("/workouts");

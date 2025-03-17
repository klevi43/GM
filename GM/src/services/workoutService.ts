import axios, { AxiosRequestConfig } from "axios";
import Workout from "../models/Workout";
import { API_URL } from "../constants/constants";
import axiosInstance from "./axiosInstance";
import { WorkoutFormData } from "../components/MyWorkoutsPageComponents/AddWorkoutForm";
class WorkoutService {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAllMostRecentWorkouts = async () => {
    return await axiosInstance
      .get<Workout[]>(this.endpoint)
      .then((res) => res.data);
  };

  createWorkout = async (newWorkout: WorkoutFormData) => {
    return await axiosInstance
      .post<Workout>(this.endpoint + "/create", newWorkout)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
  updateWorkout = async (workout: Workout) => {
    return await axiosInstance
      .patch<Workout>(this.endpoint + "/update", workout, {
        params: {
          workoutId: workout.id,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
  deleteWorkout = async (workoutId: number) => {
    return await axiosInstance
      .delete<Workout>(this.endpoint + "/delete", {
        params: {
          workoutId: workoutId,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
}

export default new WorkoutService("/workouts");

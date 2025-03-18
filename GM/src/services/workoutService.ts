import axios, { AxiosRequestConfig } from "axios";
import Workout from "../models/Workout";
import { API_URL } from "../constants/constants";
import axiosInstance from "./axiosInstance";
import { WorkoutFormData } from "../models/WorkoutFormData";
class WorkoutService {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAllMostRecentWorkouts = () => {
    return axiosInstance.get<Workout[]>(this.endpoint).then((res) => res.data);
  };

  createWorkout = (newWorkout: WorkoutFormData) => {
    return axiosInstance
      .post<Workout>(this.endpoint + "/create", newWorkout)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
  updateWorkout = (workout: Workout) => {
    return axiosInstance
      .patch<Workout>(this.endpoint + "/update", workout, {
        params: {
          workoutId: workout.id,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
  deleteWorkout = (workoutId: number) => {
    return axiosInstance
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

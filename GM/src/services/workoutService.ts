import axios, { AxiosRequestConfig } from "axios";
import Workout from "../models/Workout";
import { API_URL } from "../constants/constants";
import axiosInstance from "./axiosInstance";

class WorkoutService {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAllMostRecentWorkouts = () => {
    return axiosInstance.get<Workout[]>(this.endpoint).then((res) => res.data);
  };
}

export default new WorkoutService("/workouts");

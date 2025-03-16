import Exercise from "./Exercise";

interface Workout {
  id: number;
  name: string;
  date: Date;
  exercises?: Exercise[];
}
export default Workout;

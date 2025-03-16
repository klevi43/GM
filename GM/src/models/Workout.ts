import Exercise from "./Exercise";

interface Workout {
  id: number;
  name: string;
  date: Date;
  exerciseDtos?: Exercise[];
}
export default Workout;

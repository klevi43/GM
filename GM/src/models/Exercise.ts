import Set from "./Set";

interface Exercise {
  id: number;
  name: string;
  workoutId: number;
  sets?: Set[];
}

export default Exercise;

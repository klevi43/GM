import Set from "./Set";

interface Exercise {
  id: number;
  name: string;
  workoutId: number;
  setDtos?: Set[];
}

export default Exercise;

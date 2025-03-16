import Set from "./Set";

interface Exercise {
  id: number;
  name: string;
  workoutId: number;
  setsDtos?: Set[];
}

export default Exercise;

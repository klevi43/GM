import {
  Children,
  createContext,
  ReactElement,
  useState,
  useEffect,
} from "react";

export type WorkoutType = {
  id: number;
  name: string;
  date: Date;
};

const initState: WorkoutType[] = [];

// const initState: WorkoutType[] = [
//   {
//     id: 0,
//     name: "Chest Day",
//     date: new Date(2024, 12, 25),
//   },
//   {
//     id: 1,
//     name: "Back Day",
//     date: new Date(2024, 12, 26),
//   },
//   {
//     id: 2,
//     name: "Leg Day",
//     date: new Date(2024, 12, 27),
//   },
// ];

export type UseWorkoutsContextType = { workouts: WorkoutType[] };

const initContextState: UseWorkoutsContextType = { workouts: [] };

const WorkoutsContext = createContext<UseWorkoutsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

// Making Provider

export const WorkoutsProvider = ({ children }: ChildrenType): ReactElement => {
  const [workouts, setWorkouts] = useState<WorkoutType[]>(initState);
  useEffect(() => {
    const fetchWorkouts = async (): Promise<WorkoutType[]> => {
      const data = await fetch("http://localhost:3500/workouts")
        .then((res) => {
          return res.json();
        })
        .catch((err) => {
          if (err instanceof Error) console.log(err.message);
        });

      return data;
    };

    fetchWorkouts().then((workouts) => setWorkouts(workouts));
  }, []);
  return (
    <WorkoutsContext.Provider value={{ workouts }}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsContext;

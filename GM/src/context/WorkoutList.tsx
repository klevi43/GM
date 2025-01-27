import { WorkoutType } from "./WorkoutsProvider";

type WorkoutListStateType = { list: WorkoutType[] };

const initWorkoutListState: WorkoutListStateType = { list: [] };

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  SUBMIT: "SUBMIT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: WorkoutType;
};

const reducer = (
  state: WorkoutListStateType,
  action: ReducerAction
): WorkoutListStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("action.payload missing in ADD action");
      }
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("action.payload missing in REMOVE action");
      }
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, list: [] };
    }
    default:
      throw new Error("Unidentified reducer action type");
  }
};

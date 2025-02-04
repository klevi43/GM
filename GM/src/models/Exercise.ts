interface Exercise {
  id: number;
  name: string;
  date: Date;
}

// class Exercise {
//   private _id: number;
//   private _name: string;
//   private _workoutId?: number;
//   constructor(id: number, name: string, workoutId?: number) {
//     this._id = id;
//     this._name = name;
//     this._workoutId = workoutId;
//   }
//   // GETTERS AND SETTERS
//   set id(id: number) {
//     this._id = id;
//   }

//   set name(name: string) {
//     this._name = name;
//   }

//   set workoutId(workoutId: number) {
//     this._workoutId = workoutId;
//   }

//   get id() {
//     return this._id;
//   }

//   get name() {
//     return this._name;
//   }

//   get workoutId() {
//     return this._workoutId ? this._workoutId : -1;
//   }
// }
export default Exercise;

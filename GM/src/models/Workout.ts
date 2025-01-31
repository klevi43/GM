// class Workout {
//   private _id: number;
//   private _name: string;
//   private _date: Date;

//   constructor(id: number, name: string, date: Date) {
//     this._id = id;
//     this._name = name;
//     this._date = date;
//   }

//   get id(): number {
//     return this._id;
//   }
//   get name(): string {
//     return this._name;
//   }
//   get date(): Date {
//     return this._date;
//   }

//   set id(id: number) {
//     this._id = id;
//   }
//   set name(name: string) {
//     if (name === null) {
//       throw new Error("Invalid value");
//     }
//     this._name = name;
//   }
//   set date(date: Date) {
//     if (date === null) {
//       throw new Error("Must enter date");
//     }
//     this._date = date;
//   }
// }

interface Workout {
  id: number;
  name: string;
  date: Date;
}
export default Workout;

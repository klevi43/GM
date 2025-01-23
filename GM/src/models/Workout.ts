class Workout {
  private _name: string;
  private _date: Date;

  constructor(name: string, date: Date) {
    this._name = name;
    this._date = date;
  }

  get name(): string {
    return this._name;
  }
  get date(): Date {
    return this._date;
  }

  set name(name: string) {
    if (name === null) {
      throw new Error("Invalid value");
    }
    this._name = name;
  }
  set date(date: Date) {
    if (date === null) {
      throw new Error("Must enter date");
    }
    this._date = date;
  }
}

export default Workout;

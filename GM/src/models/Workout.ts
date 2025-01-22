class Workout {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    if (name == null) {
      throw new Error("Invalid value");
    }
    this._name = name;
  }
}

export default Workout;

import React from "react";
interface Props {
  showFormHandler(): void;
}
const AddWorkoutForm = ({ showFormHandler }: Props) => {
  return (
    <>
      <div className="outline form__container">
        <form action="" className="">
          <div>
            <div>
              <label htmlFor="" className="text">
                Workout Name
              </label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="" className="text">
                Date Completed
              </label>
              <input type="date" />
            </div>
          </div>

          <div className="form__submit-container">
            <button className="btn text btn--empty" onClick={showFormHandler}>
              Cancel
            </button>
            <button className="btn btn--primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddWorkoutForm;

import React from 'react'
interface Props {
  label: string;
  role: string;
}
const Input = ({label, role}: Props) => {
  return (
    <>
      <label htmlFor={label.toLowerCase()}>
                <h2 className='form__label'>{label}</h2>
                <input type={role} name={label.toLowerCase()} />
      </label>
    </>
  )
}

export default Input
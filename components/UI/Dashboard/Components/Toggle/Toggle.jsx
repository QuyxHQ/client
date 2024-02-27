import React from 'react'
import "./Toggle.css"

const Toggle = () => {
  return (
    <label className='Switch'>
      <input type="checkbox" />
      <span className='slider' />
    </label>
  )
}

export default Toggle
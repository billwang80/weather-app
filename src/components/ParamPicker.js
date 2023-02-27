import React from 'react'

import '../styles/parampicker.css'

function ParamPicker({ weatherParam, setWeatherParam }) {
  return (
    <div className='param_picker'>
      <div className='param__header'>Weather Metric</div>
      <select 
        className='param_select'
        value={weatherParam} 
        onChange={(event) => setWeatherParam(event.target.value)}
      >
        <option value='temp'>Temperature</option>
        <option value='wind'>Wind</option>
        <option value='precip'>Precipitation</option>
      </select>
    </div>
  )
}

export default ParamPicker

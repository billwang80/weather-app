import React, { useState } from 'react'

import LocationSelector from './LocationSelector'
import TimePicker from './TimePicker'
import Weather from './Weather'
import ParamPicker from './ParamPicker'

import '../styles/container.css'

const defaultPosition = { lat: 38.89, lng: -77.036 }

function Container() {

  const [date, setDate] = useState([new Date(), new Date()])
  const [position, setPosition] = useState(defaultPosition)
  const [weatherParam, setWeatherParam] = useState("temp") // temp, wind, precip

  return (
    <div>
      <Weather date={date} position={position} weatherParam={weatherParam} />
      <div className='box'>
        <div className='selector-container'>
          <div className='flex-container'>
            <div className='flex-child'>
              <TimePicker date={date} setDate={setDate} />
            </div>
            <div className='flex-child'>
              <ParamPicker weatherParam={weatherParam} setWeatherParam={setWeatherParam} />
            </div>
          </div>
          <LocationSelector position={position} setPosition={setPosition} />
        </div>
      </div>
    </div>
  )
}

export default Container

import React from 'react'
import {CanvasJSChart} from 'canvasjs-react-charts'

import '../styles/linechart.css'

function LineChart({ data, weatherParam }) {
  let unit = '°C'
  let param = 'Temperature'

  if (weatherParam === 'wind') {
    unit = 'm/s'
    param = 'Wind speed'
  } else if (weatherParam === 'precip') {
    unit = 'mm'
    param = 'Precipitation'
  } else {
    unit = '°C'
    param = 'Temperature'
  }

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: 'light2',
    title: {
      text: param + ' over time'
    },
    axisY: {
      title: param,
      suffix: unit
    },
    axisX: {
      title: "Time"
    },
    data: [{
      type: 'line',
      toolTipContent: 'Date: {x} |' + param + ': {y} ' + unit,
      dataPoints: data
    }]
  }

  return (
    <div>
      <CanvasJSChart 
        options = {options}
        containerProps={{ width: '100%' }}
      />
    </div>
  )
}

export default LineChart

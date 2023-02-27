import React, { useState, useEffect } from 'react'
import LineChart from './LineChart'

import '../styles/weather.css'

function Weather({ date, position, weatherParam }) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const date1 = date[0].toISOString()
    const date2 = date[1].toISOString()

    let param_url = 't_2m:C'
    if (weatherParam === 'wind') {
      param_url = 'wind_speed_10m:ms'
    } else if (weatherParam === 'precip') {
      param_url = 'precip_1h:mm'
    } else {
      param_url = 't_2m:C'
    }

    const date_url = date[0].toDateString() !== date[1].toDateString() ? date1 + '--' + date2 : date1
    const url = 'https://api.meteomatics.com/' + date_url + '/' + param_url + '/' + position['lat'] + ',' + position['lng'] + '/json'
    const LOGIN_INFO = process.env.REACT_APP_WEATHER_USER + ':' + process.env.REACT_APP_WEATHER_PASS

    fetch(url, {
      headers: new Headers({
        'Authorization': 'Basic ' + btoa(LOGIN_INFO),
      })
    }
    )
    .then((response) => response.json())
    .then((data) => {
      const parsedDates = data.data[0].coordinates[0].dates.map(item => ({ x: new Date(item.date), y: item.value }))
      setData(parsedDates)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err.message)
    })
  }, [date, position, weatherParam])

  const getAverageVal = (arr) => {
    let res = 0
    for (const i in arr) {
      res += parseFloat(arr[i].y)
    }
    return (res / arr.length).toFixed(1)
  }

  const getLineChart = () => {
    if (date[0].toDateString() !== date[1].toDateString()) {
      return <div className='chart-container'><LineChart data={data} weatherParam={weatherParam} /></div>
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  
  let unit = '°C'
  let card_title = 'Temperature'
  if (weatherParam === 'wind') {
    unit = 'm/s'
    card_title = 'Wind'
  } else if (weatherParam === 'precip') {
    unit = 'mm'
    card_title = 'Precipitation'
  } else {
    unit = '°C'
    card_title = 'Temperature'
  }

  return (
    <div>
      <div className='card'>
        <h3>{ card_title }</h3>
        <h1>{ getAverageVal(data) } { unit }</h1>
      </div>
      {getLineChart()}
    </div>
  )
}

export default Weather

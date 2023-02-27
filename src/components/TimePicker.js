import React from 'react'
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker/dist/DateTimeRangePicker'

import '../styles/timepicker.css'

function TimePicker( { date, setDate } ) {

  return (
    <div className='Time'>
      <div className='Time__header'>Date Range</div>
      <div className='Time__container'>
        <main className="Time__container__content">
          <DateTimeRangePicker onChange={setDate} value={date} disableCalendar={true} />
        </main>
      </div>
    </div>
  )
}

export default TimePicker

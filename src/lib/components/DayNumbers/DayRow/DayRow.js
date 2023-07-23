import React from 'react'
import DayCell from '../DayCell/DayCell'

/**
 * Component to display row containing each day of a week
 *
 * @param {Object}   props
 * @param {Array}    props.week                 array containg the days of the week
 * @param {Date}     props.period               period of the calendar
 * @param {Date}     props.dateSelected         date selected by the user
 * @param {Function} props.handleClickSelectDay callback to change the date by click
 * @param {Function} props.handleKeySelectDay   callback to change the date by keyboard key
 * @param {Object}   props.themes               object containing css classes to custom theme
 *
 * @returns <DayRow
 *  week={ ... }
 *  period={ ... }
 *  dateSelected={ ... }
 *  handleClickSelectDay={ ... }
 *  handleKeySelectDay={ ... }
 *  themes={ ... } />
 */
export default function DayRow({ week, period, dateSelected, handleClickSelectDay, handleKeySelectDay, themes }) {

  return (
    <tr>
      {
        week.map((day, index) => (
          <DayCell
            key={ index }
            currentDay={ day }
            period={ period }
            dateSelected={ dateSelected }
            handleClickSelectDay={ handleClickSelectDay }
            handleKeySelectDay={ handleKeySelectDay }
            themes={ themes }
          />
        ))
      }
    </tr>
  )
}
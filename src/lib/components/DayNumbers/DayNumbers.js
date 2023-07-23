import React from 'react'
import { getCalendar, selectDay } from '../utils'
import DayRow from './DayRow/DayRow'

/**
 * Component containing list days of the calendar
 *
 * @param {Object}    props
 * @param {Date}      props.today              today's date
 * @param {Date}      props.dateSelected       date selected by the user
 * @param {Function}  props.updateSelectedDate callback to update date selected by the user
 * @param {Date}      props.period             period of the calendar
 * @param {Object}    props.themes             object containing css classes to custom theme
 *
 * @returns <DayNumbers dateSelected={ ... } updateSelectedDate={ ... } />
 */
export default function DayNumbers({ today, dateSelected, updateSelectedDate, period, themes }) {

  /**
   * Handle click to select day in the calendar
   *
   * @param {Event} event
   */
  function handleClickSelectDay(event) {
    const newDate = selectDay(event.target.dataset)

    updateSelectedDate(newDate)
  }

  /**
   * Handle key to select day in the calendar
   *
   * - use Tab key to move inside the calendar
   * - use Space key to choose a day
   *
   * @param {Event} event
   */
  function handleKeySelectDay(event) {
    if(event.code === 'Space') {
      event.preventDefault()

      const newDate = selectDay(event.target.dataset)

      updateSelectedDate(newDate)
    }
  }

  return (
    <>
      {
        getCalendar(period).map((week, index) => (
          <DayRow
            key={ index }
            week={ week }
            today={ today }
            period={ period }
            dateSelected={ dateSelected }
            handleClickSelectDay={ event => handleClickSelectDay(event) }
            handleKeySelectDay={ event => handleKeySelectDay(event) }
            themes={ themes }
          />
        ))
      }
    </>
  )
}
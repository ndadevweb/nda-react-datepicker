import React from 'react'

/**
 * Display and update month selected
 *
 * @param {Object}   props
 * @param {Date}     props.period       period of the calendar
 * @param {Function} props.updatePeriod callback to update the date of the period
 *
 * @returns <MonthNames period={ ... } updatePeriod={ ... } />
 */
export default function MonthNames({ period, updatePeriod }) {

  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ]

  /**
   * Change the month
   *
   * @param {Number} indexOfMonth
   */
  function handleChangeMonth(indexOfMonth) {
    period.setMonth(indexOfMonth)

    updatePeriod(period)
  }

  return (
    <select value={ period.getMonth() } onChange={ (event) => handleChangeMonth(event.target.value) }>
      {
        months.map((month, index) => <option key={ index } value={ index }>{ month }</option>)
      }
    </select>
  )
}
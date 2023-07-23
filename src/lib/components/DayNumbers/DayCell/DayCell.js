import React from 'react'
import classes from './DayCell.module.css'

/**
 * Component to display a day of the month
 *
 * @param {Object}   props
 * @param {Object}   props.currentDay           Iteration day
 * @param {Date}     props.period               period of the calendar
 * @param {Date}     props.dateSelected         date selected by the user
 * @param {Function} props.handleClickSelectDay callback to change the date by click
 * @param {Function} props.handleKeySelectDay   callback to change the date by keyboard key
 * @param {Object}   props.themes               object containing css classes to custom theme
 *
 * @returns <DayCell
 *  currentDay={ ... }
 *  period={ ... }
 *  dateSelected={ ... }
 *  handleClickSelectDay={ ... }
 *  handleKeySelectDay={ ... }
 *  themes={ ... } />
 */
export default function DayCell({ currentDay, period, dateSelected, handleClickSelectDay, handleKeySelectDay, themes }) {

  const { day, month, year } = currentDay
  const currentDayToDate = new Date(year+'/'+month+'/'+day)

  /**
   * Check if the date selected by the user is equal to the iteration day
   *
   * @returns {Boolean}
   */
  function isTodaySelected() {
    if(dateSelected.toLocaleDateString('en-US') === currentDayToDate.toLocaleDateString('en-US')) {
      return true
    }

    return false
  }

  /**
   * Check if the date of the day is equal to the iteration day
   *
   * @returns {Boolean}
   */
  function isToday() {
    if((new Date()).toLocaleDateString('en-US') === currentDayToDate.toLocaleDateString('en-US')) {
      return true
    }

    return false
  }

  function dayCellTheme() {
    const classesList = [classes.dayCell]

    if(themes?.customThemeDayCell !== undefined) {
      classesList.push(themes.customThemeDayCell)
    }

    return classesList.join(' ')
  }

  function dayCellDayTheme() {
    const classesList = []

    // day
    if(themes?.customThemeDayCellDay !== undefined) {
      classesList.push(...[classes.day, themes.customThemeDayCellDay])
    } else {
      classesList.push(classes.day)
    }

    if(isTodaySelected() === true) {
      classesList.push(classes.daySelected)
    }

    if(isToday() === true && isTodaySelected() === false) {
      classesList.push(classes.today)
    }

    if(+month !== period.getMonth() + 1) {
      classesList.push(classes.dayAnotherMonth)
    }

    if(themes?.customThemeDayCellDayAnotherMonth !== undefined && classesList.indexOf(classes.dayAnotherMonth) !== -1) {
      classesList.push(themes.customThemeDayCellDayAnotherMonth)
    }

    return classesList.join(' ')
  }

  return (
    <td className={ dayCellTheme() }>
      <div
        data-year={ year }
        data-month={ month }
        data-day={ day }
        tabIndex={ 0 }
        className={ dayCellDayTheme() }
        onClick={ event => handleClickSelectDay(event) }
        onKeyDown={ event => handleKeySelectDay(event) }
      >
        { day }
      </div>
    </td>
  )
}
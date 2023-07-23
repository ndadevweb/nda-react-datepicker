import React from 'react';

/**
 * Return a select component containing a year list
 * between 1950 and 2050
 *
 * @param {Object}   props
 * @param {Date}     props.period       period date of the calendar
 * @param {Function} props.updatePeriod callback to update the period date of the calendar
 *
 * @returns <Year period={ ... } updatePeriod={ ... } />
 */
export default function Years({
  period,
  updatePeriod
}) {
  const startYear = 1950;
  const endYear = 2050;
  const years = Array.from({
    length: endYear - startYear + 1
  }, (year, index) => startYear + index);

  /**
   * Handle the selection of the year
   *
   * @param {String} year
   */
  function handleChangeYear(year) {
    period.setFullYear(year);
    updatePeriod(period);
  }
  return /*#__PURE__*/React.createElement("select", {
    value: period.getFullYear(),
    onChange: event => handleChangeYear(event.target.value)
  }, years.map((year, index) => /*#__PURE__*/React.createElement("option", {
    key: index,
    value: year
  }, year)));
}
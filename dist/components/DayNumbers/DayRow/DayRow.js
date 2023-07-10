import React from 'react';
import DayCell from '../DayCell/DayCell';

/**
 * Component to display row containing each day of a week
 *
 * @param {Object}   props
 * @param {Array}    props.week
 * @param {Date}     props.dateSelected
 * @param {Function} props.handleClickSelectDay
 * @param {Function} props.handleKeySelectDay
 * @param {Object}   props.themes
 *
 * @returns <DayRow
 *  week={ ... }
 *  dateSelected={ ... }
 *  handleClickSelectDay={ ... }
 *  handleKeySelectDay={ ... }
 *  themes={ ... } />
 */
export default function DayRow({
  week,
  dateSelected,
  handleClickSelectDay,
  handleKeySelectDay,
  themes
}) {
  return /*#__PURE__*/React.createElement("tr", null, week.map((day, index) => /*#__PURE__*/React.createElement(DayCell, {
    key: index,
    currentDay: day,
    dateSelected: dateSelected,
    handleClickSelectDay: handleClickSelectDay,
    handleKeySelectDay: handleKeySelectDay,
    themes: themes
  })));
}
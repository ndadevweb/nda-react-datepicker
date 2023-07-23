import React from 'react';
import classes from './DayNames.module.css';

/**
 * Return a table row component containing days of the week
 * Currently start from Sunday to Saturday
 *
 * @param {Object} props
 * @param {Object} props.themes object containing css classes to custom theme
 *
 * @returns <DayNames themes={ ... } />
 */
export default function DayNames({
  themes
}) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  /**
   * Returns a string containing css classes
   *
   * @returns {String}
   */
  function dayNameTheme() {
    const classesList = [classes.dayName];
    if (themes?.customThemeDayNamesDayName !== undefined) {
      classesList.push(themes.customThemeDayNamesDayName);
    }
    return classesList.join(' ');
  }
  const dayNamesClasses = dayNameTheme();
  return /*#__PURE__*/React.createElement("tr", null, days.map((day, index) => /*#__PURE__*/React.createElement("th", {
    key: index,
    className: dayNamesClasses
  }, day)));
}
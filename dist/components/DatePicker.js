import React, { useEffect, useState } from 'react';
import { isDateValid, dateToFormat } from './utils.js';
import Header from './Header/Header';
import DayNames from './DayNames/DayNames';
import DayNumbers from './DayNumbers/DayNumbers';
import classes from './DatePicker.module.css';

/**
 * DatePicker component
 *
 * @param {Object}   props
 * @param {Date}     props.dateSelected    date selected by the user
 * @param {Function} props.updateSelectedDate callback to update the date selected by the user
 * @param {Object}   props.themes          object containing css classes to custom theme
 *
 * @returns <DatePicker dateSelected={ ... } updateSelectedDate={ ... } themes={ ... }/>
 */
export default function DatePicker({
  dateSelected,
  updateSelectedDate,
  themes = {}
}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [period, setPeriod] = useState(new Date());
  useEffect(() => {
    if (isDateValid(dateSelected) === true) {
      const newDate = new Date(dateSelected);
      setCurrentDate(newDate);
      setPeriod(newDate);
    }
  }, [dateSelected]);

  /**
   * Return a string containing css classes
   */
  function themeContainer() {
    const classesList = [classes.container];
    if (themes?.customThemeContainer !== undefined) {
      classesList.push(themes.customThemeContainer);
    }
    return classesList.join(' ');
  }
  return /*#__PURE__*/React.createElement("div", {
    className: themeContainer()
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement(Header, {
    period: period,
    updatePeriod: newDate => setPeriod(new Date(newDate)),
    themes: themes
  })), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(DayNames, {
    themes: themes
  }), /*#__PURE__*/React.createElement(DayNumbers, {
    dateSelected: currentDate,
    updateSelectedDate: newDate => updateSelectedDate(dateToFormat(newDate)),
    period: period,
    updatePeriod: newDate => setPeriod(dateToFormat(newDate)),
    themes: themes
  }))));
}
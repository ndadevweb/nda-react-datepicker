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
 * @param {Date}     props.dateSelected
 * @param {Function} props.updateInputDate
 * @param {Object}   props.themes
 *
 * @returns <DatePicker dateSelected={ ... } updateInputDate={ ... } />
 */
export default function DatePicker({
  dateSelected,
  updateInputDate,
  themes = {}
}) {
  const defaultDate = new Date();
  const [currentDate, setCurrentDate] = useState(defaultDate);
  useEffect(() => {
    if (isDateValid(dateSelected) === true) {
      const newDate = new Date(dateSelected);
      setCurrentDate(newDate);
    }
  }, [dateSelected]);
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
    dateSelected: currentDate,
    updateDate: newDate => setCurrentDate(new Date(newDate)),
    themes: themes
  })), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(DayNames, {
    themes: themes
  }), /*#__PURE__*/React.createElement(DayNumbers, {
    dateSelected: currentDate,
    updateInputDate: newDate => updateInputDate(dateToFormat(newDate)),
    themes: themes
  }))));
}
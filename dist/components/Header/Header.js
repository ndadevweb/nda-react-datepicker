import React from 'react';
import { default as SelectMonthNames } from '../MonthNames/MonthNames';
import { default as SelectYears } from '../Years/Years';
import triangleImage from '../assets/triangle.svg';
import homeImage from '../assets/home.svg';
import classes from './Header.module.css';

/**
 * Component to handle the period change of the calendar
 *
 * @param {Object}   props
 * @param {Date}     props.period       period of the calendar
 * @param {Function} props.updatePeriod callback to update the date of the period
 * @param {Object}   props.themes       object containing css classes to custom theme
 *
 * @returns <Header period={ ... } updatePeriod={ ... } themes={ ... } />
 */
export default function Header({
  period,
  updatePeriod,
  themes
}) {
  const INDEX_MONTH_DECEMBER = 11;
  const INDEX_MONTH_JANUARY = 0;

  /**
   * Change current month by the previous
   * Returns a date object corresponding to the selected month
   *
   * @returns {Date}
   */
  function changePeriodToLeft() {
    const newPeriod = new Date(period);
    if (newPeriod.getMonth() === INDEX_MONTH_JANUARY) {
      newPeriod.setMonth(INDEX_MONTH_DECEMBER);
      newPeriod.setFullYear(newPeriod.getFullYear() - 1);
    } else {
      newPeriod.setMonth(newPeriod.getMonth() - 1);
    }
    return newPeriod;
  }

  /**
   * Change current month by the next
   * Returns a date object corresponding to the selected month
   *
   * @returns {Date}
   */
  function changePeriodToRight() {
    const newPeriod = new Date(period);
    if (newPeriod.getMonth() === INDEX_MONTH_DECEMBER) {
      newPeriod.setMonth(INDEX_MONTH_JANUARY);
      newPeriod.setFullYear(newPeriod.getFullYear() + 1);
    } else {
      newPeriod.setMonth(newPeriod.getMonth() + 1);
    }
    return newPeriod;
  }
  function themeActions() {
    const classesList = [classes.actions];
    if (themes?.customThemeButtonsAction !== undefined) {
      classesList.push(themes?.customThemeButtonsAction);
    }
    return classesList.join(' ');
  }
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 7
  }, /*#__PURE__*/React.createElement("div", {
    className: themeActions()
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: classes.buttonLeft,
    onClick: () => updatePeriod(changePeriodToLeft())
  }, /*#__PURE__*/React.createElement("img", {
    src: triangleImage,
    className: classes.triangleLeft,
    alt: "Left"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => updatePeriod(new Date())
  }, /*#__PURE__*/React.createElement("img", {
    src: homeImage,
    className: classes.home,
    alt: "Home"
  })), /*#__PURE__*/React.createElement(SelectMonthNames, {
    period: period,
    updatePeriod: updatePeriod
  }), /*#__PURE__*/React.createElement(SelectYears, {
    period: period,
    updatePeriod: updatePeriod
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: classes.buttonRight,
    onClick: () => updatePeriod(changePeriodToRight())
  }, /*#__PURE__*/React.createElement("img", {
    src: triangleImage,
    className: classes.trianglerRight,
    alt: "Right"
  })))));
}
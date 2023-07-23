# React DatePicker

React DatePicker is a simple component to display and manage a calendar on a web page


## Description

This component allows you to select a date, including day, month, and year.

To interact with the component, three props, two of which are mandatory, are used

- **dateSelected** containing a date in MM/DD/YYYY format
- **updateSelectedDate** a callback function to interact with the parent component implements the DatePicker component
- **themes** a literal object to entirely change the style of the DatePicker _(Optional)_

**Currently only the US date allowed MM/DD/YYYY**


## How to test the DatePicker component without install in your project

Clone this repository `https://github.com/ndadevweb/nda-react-datepicker.git`

Install the project `npm install`


## How to install in your project

From you terminal add this command `npm i ndadevweb/nda-react-datepicker`


## How to use in your project

In your component

```
import { useState } from 'react'
import { DatePicker } from 'ndadevweb/nda-react-datepicker'
import classesCustomDatePicker from './customThemeDatePicker.module.css'

export default function YourComponent() {
    const [dateSelected, setDateSelected] = useState('')

    return (
      <>
        <input type="text" value={ inputDate } onInput={ (event) => setDateSelected(event.target.value) } />

        <DatePicker
          dateSelected={ dateSelected }
          updateSelectedDate={ (newDateSelected) => setDateSelected(newDateSelected) }
          themes={ classesCustomDatePicker }
        />
      </>
    )
}
```


## How to change style of the React DatePicker component

Create a DatePicker.module.css file

Create a literal object with these properties

```
const themes = {
  customThemeContainer: classes.customThemeContainer,
  customThemeButtonsAction: classes.customThemeButtonsAction,
  customThemeDayNamesDayName: classes.customThemeDayNamesDayName,

  customThemeDayCell: classes.customThemeDayCell,
  customThemeDayCellDay: classes.customThemeDayCellDay,
  customThemeDayCellDaySelected: classes.customThemeDayCellDaySelected,
  customThemeDayCellDayAnotherMonth: classes.customThemeDayCellDayAnotherMonth
  }
```

OR

import your file with your custom classes and do that

```
import classesCustomDatePicker from './customThemeDatePicker.module.css'

...
<DatePicker
  dateSelected={ dateSelected }
  updateInputDate={ (newDateSelected) => setDateSelected(newDateSelected) }
  themes={ classesCustomDatePicker }
/>
...

```

Below all css classes can be override

```
/* DatePicker container */

.customThemeContainer {}


/* DatePicker Header */

.customThemeButtonsAction {}

.customThemeButtonsAction button,
.customThemeButtonsAction select {}

.customThemeButtonsAction button:hover,
.customThemeButtonsAction select:hover {}

.customThemeButtonsAction .triangleLeft {}

.customThemeButtonsAction .triangleRight {}

.customThemeButtonsAction .home {}


/* DatePicker DayName */

.customThemeDayNamesDayName {}

/* DatePicker DayCell Day */

.customThemeDayCell {}

.customThemeDayCellDay {}

.customThemeDayCellDaySelected {}

.customThemeDayCellDay:hover,
.customThemeDayCellDaySelected:hover {}

.customThemeDayCellDayAnotherMonth {}

```

### DatePicker container

**.customThemeContainer** to change background or another styles of the DatePicker container


### DatePicker Header

This area contains 3 buttons and 1 select to change date

- The first button to go to the previous month
- The second button to set today's date
- The third button to go to the next month
- The select to choose a month of the year

**.customThemeButtonsAction** to change background or another styles of the element containing the interaction buttons

**.customThemeButtonsAction button** to change background or another styles of the buttons

**.customThemeButtonsAction select** to change background or another styles of the select

**.customThemeButtonsAction .triangleLeft** to change background or another styles of the button to go to the previous month

**.customThemeButtonsAction .triangleRight** to change background or another styles of the button to go to the next month

**.customThemeButtonsAction .home** to change background or another styles of the button to set today's date


### DatePicker DayName

This area contains the names of the days of the week

**.customThemeDayNamesDayName** to change background or another styles


### DatePicker DayCell

Contains the date of the day

**.customThemeDayCell** to change background or another styles of the cell

**.customThemeDayCellDay** to change background or another styles of the default day

**.customThemeDayCellDaySelected** to change background or another styles of the selected day

**.customThemeDayCellDay:hover, .customThemeDayCellDaySelected:hover** to change background or another styles when the date is over

**.customThemeDayCellDayAnotherMonth** to change background or another styles of the days displayed not corresponding to month days of the current month
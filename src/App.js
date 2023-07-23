import { useState } from 'react'
import { DatePicker } from './lib'

export default function App() {

  const [dateSelected, setDateSelected] = useState('')

  const [show, setShow] = useState(true)

  return (
    <main>
      <h1>DatePicker</h1>
      <p style={{ margin: '10px' } }>Write a date to US format or pick a day in the calendar :)</p>
      <p style={{ margin: '10px' } }>Example : 07/24/2023 to selected a date in july</p>
      <button type="button" onClick={ () => setShow(show === false) } style={{ width: '256px', marginBottom: '5px' }}>
        {
          show === true ? 'Hide' : 'Show'
        }
      </button>
      <input type="text" value={ dateSelected } onInput={ event => setDateSelected(event.target.value) } style={{ width: '256px' }} />
      { show === true &&
      <DatePicker dateSelected={ dateSelected } updateSelectedDate={ (newDateSelected) => setDateSelected(newDateSelected) } />
      }
    </main>
  )
}
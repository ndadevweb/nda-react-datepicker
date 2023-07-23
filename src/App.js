import { useState } from 'react'
import { DatePicker } from './lib'

export default function App() {

  const [dateSelected, setDateSelected] = useState('')

  return (
    <main>
      <h1>DatePicker</h1>
      <p>Write a date to US format or pick a day in the calendar :)</p>
      <input type="text" value={ dateSelected } onInput={ event => setDateSelected(event.target.value) } style={{ width: '256px' }} />
      <DatePicker dateSelected={ dateSelected } updateSelectedDate={ (newDateSelected) => setDateSelected(newDateSelected) } />
    </main>
  )
}
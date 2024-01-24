import { useState } from 'react'

import Person from './components/Person'
import data from './data'

const App = () => {
  const [people, setPeople] = useState(data)

  function clearList() {
    setPeople([])
  }

  function removePerson(personId){
    setPeople(()=> people.filter( person => person.id !== personId))
  }

  return (
    <>
      <h2>Birthday Reminder - Starter</h2>;

      <p>People's Birthday Todayg: {people.length}</p>

      <h3>People</h3>
      {people.map((person) => {
        return <>
          <Person person={person} key={person.id} />
          <button onClick={() => { removePerson(person.id) }}>Remove Person</button>
        </>
      })}
      <br/><button onClick={clearList}>Clear</button>
    </>
  )
};

export default App;

import { useState } from 'react';
import { nanoid } from 'nanoid'

import textData from './data'

const App = () => {
  
  const [ count, setCount ] = useState(1)
  const [ text, setText ] = useState(textData)
  
  function handleSubmit(e){
    e.preventDefault()
    const newText = textData.slice(0,Number(count))
    setText(newText)
  }

  return (
    <>
      <h2>Lorem Slicer</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="number"></label>
        <input type="number" min='1' max='8' name={'number'} value={count} onChange={(e) => setCount(e.target.value)}/>
        <input type="submit" />
      </form> 
      <>
        { text.map( e => {
          return <article key={ nanoid() }>
            <p >{e}</p>
            <br />
          </article>
          })}
      </>
    </>
  )
};
export default App;

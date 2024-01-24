import { useEffect, useState } from "react";

import Tours from './components/Tours'

const url = 'https://course-api.com/react-tours-project';

const App = () => {

  const [tours, setTours] = useState(null)

  useEffect(()=>{
    (async ()=>  setTours(await getTours()))()
    },[])

  async function getTours(){
      const res = await fetch(url)
      if (res.ok){
        const data = await res.json()
        return data
      } else alert('error')
    }

  if(!tours) return <h2>Loading...</h2>

  return (
    <>
      <h2>Our Tours</h2> 
      <Tours tours={tours} func={getTours}/>
    </>
  )
};
export default App;

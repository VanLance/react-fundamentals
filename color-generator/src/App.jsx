import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify';

import ColorList from "./components/ColorList";
import Form from "./components/Form";
import { useState } from 'react';

const App = () => {
  const [colors, setColors ] = useState(new Values('#f15025').all(10))

  function addColor(color){
    const newColor =  new Values(color).all(10)
      if(!newColor){ 
        toast.error('error message')
        return 
      }
      setColors([...colors, newColor])
      toast.success('awesome')
  }

  return (
    <>
      <Form addColor={addColor}/>
      <ColorList colors={colors}/>
      <ToastContainer position='top-center' />
    </>
  )
};
export default App;

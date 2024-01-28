import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Form from "./Form";
import Items from "./Items";

const App = () => {

  const [items, setItems] = useState([])
  localStorage.setItem('items', JSON.stringify(items))

  const addItem = (item) => {
    setItems((()=>[...items, item])())
  }

  const removeItem = (itemId) => {
    setItems( items.filter( item => item.id !== itemId))
  }

  return (
    <>
      <h2>Grocery Bud - Starter</h2>
      <Form addItem={addItem}/>
      <Items items={items} removeItem={removeItem}/>
      <ToastContainer />
    </>
  );
};

export default App;

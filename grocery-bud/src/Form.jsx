import { toast } from "react-toastify"
import { nanoid } from 'nanoid'

export default function Form( { addItem }) {
  
  function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const itemName = formData.get('item');

    if(!formData.get('item')) {
      toast.error('Please fil out form')
      return
    }

    addItem({ name: itemName, id: nanoid(), completed: false})
    document.querySelector('#item-name').value = ''
    toast.success(`${itemName} added`)
  }

  return (
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="item"></label>
        <input type="text" name='item' id='item-name'/>
        <input type="submit" />
    </form>
  )
}

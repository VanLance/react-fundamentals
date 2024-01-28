import { useState } from "react"
import { toast } from "react-toastify"

export default function SingleItem({ item, removeItem }) {

    const [isChecked, setIsChecked] = useState(item.completed)


    return (
        <div style={{ textDecoration: isChecked ? 'line-through' : '' }}>
            <label htmlFor="">{item.name} </label>
            <input
                type="checkbox"
                onChange={() => setIsChecked(!isChecked)} />
            <button onClick={() => {
                removeItem(item.id)
                toast.success(item.name.concat(' removed'))
            }}>Remove</button>
        </div>
    )
}

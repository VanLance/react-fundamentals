import { useState } from "react"

export default function Form({ addColor }) {

    const [color, setColor] = useState()
    const [text, setText] = useState()

    function handleSubmit(e){
        e.preventDefault()
        const formData = new FormData(e.currentTarget.value)
        setColor(formData.get(color))
        setText(formData.get(text))
        addColor(color)
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="color">Color</label>
            <input type="text" name='color' />
            <label htmlFor="text">text</label>
            <input type="text" name='text' />
            <input type="submit" value="submit" />
        </form>
    )
}

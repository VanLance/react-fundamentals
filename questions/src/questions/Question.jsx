import { useState } from "react"

export default function Question({ question }) {
    const [showInfo, setShowInfo] = useState(false)
    console.log(showInfo);
    return (
        <>
            <h3>{question.title}</h3>
            {showInfo && <p>
                {question.info}
            </p>}
            <button onClick={() => setShowInfo(!showInfo)}>Toggle</button>
        </>
    )
}

import React, { useState } from 'react'

export default function Tour({ tour }) {

    const { image, id, info, name, price } = tour

    const [showDesc, setShowDesc] = useState(false)

    return (
        <div>Tour
            <h3>{name}</h3>
            <img src={image} alt="" style={{ maxWidth: '200px' }} />
            <p>{price}</p>
            {showDesc && <p>{info}</p>}
            <button id='btnid' onClick={() => {
                setShowDesc(!showDesc)
            }
            }>Show More</button>
        </div>
    )
}

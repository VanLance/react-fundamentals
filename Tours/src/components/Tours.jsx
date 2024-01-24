import { useState } from 'react'
import Tour from './Tour'

export default function Tours(props) {

    const { tours, func } = props

    const [stateTours, setStateTours] = useState(tours)
    console.log(stateTours, 'tate tours from tours');
    function removeTour(tourId) {
        setStateTours(stateTours.filter(tour => tour.id !== tourId))
    }
    return (
        <div>
            <h1>Tours</h1>
            {stateTours.map(tour => {
                return <div key={tour.id}>
                    <Tour tour={tour} key={tour.id} />
                    <button onClick={()=>removeTour(tour.id)}>Remove Tour</button>
                </div>
            })}
            <button onClick={ async ()=> setStateTours(await func())}>Refresh</button>
        </div>

    )
}

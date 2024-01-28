

import SingleItem from "./SingleItem"

export default function Items({ items, removeItem }) {
  return (
    <div>
        { items.map( (item,id) => <SingleItem key={id} item={item} removeItem={removeItem}/> )}
    </div>
  )
}

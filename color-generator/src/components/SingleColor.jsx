
export default function SingleColor({ color }) {
  console.log(color);
  return (
    <article style={{ backgroundColor: '#'.concat(color.hex) }}>
        <p>{color.hex}</p> 
        <p>{ color.weight }</p>
    </article>
  )
}

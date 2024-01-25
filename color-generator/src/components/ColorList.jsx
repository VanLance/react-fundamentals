import SingleColor from "./SingleColor";

export default function ColorList({ colors }) {
    return (
        <section>
            {colors.map((color, i) => {
                return <SingleColor key={i} color={color} />
            })}
        </section>
    )
}

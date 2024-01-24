
export default function Person( props ) {
    console.log(props.person)
    return (
        <li>
            <img src={props.person.image} style={{ width: "200px" }} alt="" />
            <p>{props.person.name}</p>
            <p>Age: {props.person.age}</p>
        </li>
    )
}

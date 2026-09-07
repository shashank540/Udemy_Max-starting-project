export default function CoreConcept(props) {
  console.log('CoreConcepts component is rendering');
  return (
    <li>
      <img src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
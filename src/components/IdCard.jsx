export function IdCard(props) {
  const birthDate = props.birth.toString();

  return (
    <div>
      <img src={props.picture} alt={props.firstName} />
      <p>{props.firstName}</p>
      <p>{props.lastName}</p>
      <p>{props.gender}</p>
      <p>{props.height}</p>
      <p>{birthDate}</p>
    </div>
  );
}

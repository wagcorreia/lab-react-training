function IdCard(props) {
  return (
    <div className="id-container">
      <img src={props.picture} alt="id pic" />

      <div className="subtitle">
        <p>
          <b>FirstName:</b> {props.firstName}
        </p>
        <p>
          <b>LastName:</b> {props.lastName}
        </p>
        <p>
          <b>Gender:</b> {props.gender}
        </p>
        <p>
          <b>Height:</b> {props.height}
        </p>
        <p>
          <b>Birth:</b> {props.birth}
        </p>
      </div>
    </div>
  );
}
export default IdCard;

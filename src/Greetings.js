function Greetings(props) {
  const greetings = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Ola',
    fr: 'Bonjour',
  };

  return (
    <div>
      <p className="greetings">
        {greetings[props.lang]} {props.children}
      </p>
    </div>
  );
}
export default Greetings;

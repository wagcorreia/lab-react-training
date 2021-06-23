function Greetings(props) {
  //   const obj = {
  //     de: 'Hallo',
  //     en: 'Hello',
  //     es: 'Ola',
  //     fr: 'Bonjour',
  //   };

  //   function renderText() {
  //     let text = '';

  //     for (let key in obj) {
  //       if (props[key]) {
  //         text += obj[key] + ' ';
  //       }
  //     }
  //     return text;
  //   }

  return (
    <div>
      <p className="greetings" lang={props.lang}>
        ({props.lang} === "de") ? 'Hallo'{props.children}
      </p>
    </div>
  );
}
export default Greetings;

import React from 'react';

function Rating(props) {
  const numberOfStars = Math.round(props.children);

  let str = '';

  for (let i = 0; i < 5; i++) {
    if (i < numberOfStars) {
      str += '★';
    } else {
      str += '☆';
    }
  }

  return (
    <div className="m-3">
      <span className="display-4"> {str} </span>
    </div>
  );
}
export default Rating;

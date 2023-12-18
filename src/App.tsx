import React, { useState } from 'react';

const State = () => {
  const [text, setText] = useState('black');
  const [color, setColor] = useState('black'); // Another state to store the chosen color by the user

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  // A function is been declared
  const handleButtonClick = () => {
    setColor(text); // it updates the chosen color when the button is clicked
  };

  return (
    <div>
      <p style={{ color: color }}>
        Progressively effective resources via business metrics.
      </p>
      <br />
      <div className='inputBtn-container'>
        <input
          type='text'
          className='input'
          value={text}
          onChange={handleInputChange}
        />
        <button className='btn' onClick={handleButtonClick}>
          Change text color
        </button>
      </div>
    </div>
  );
};

export default State;

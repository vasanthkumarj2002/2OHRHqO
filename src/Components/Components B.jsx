import React from 'react';

function ComponentB({ cendolValue, onCendolValueChange }) {
  const handleButtonClick = () => {
    const newValue = cendolValue + 10;
    onCendolValueChange(newValue);
  };

  return (
    <div>
      <p>Value from Component A: {cendolValue}</p>
      <button onClick={handleButtonClick}>Increment by 10</button>
    </div>
  );
}

export default ComponentB;

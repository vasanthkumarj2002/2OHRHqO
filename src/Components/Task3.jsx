import React from 'react';
import style from "./task3.module.css"

function Task3() {
  
  const [isTrue, setIsTrue] = React.useState(true);

  const buttonStyle = {
    backgroundColor: isTrue ? 'red' : 'blue',
  };

  const handleButtonClick = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div>
     
      <div className={style.empty}></div>
      <h1> Assignment-3</h1>
      <button style={buttonStyle} onClick={handleButtonClick}>
        Click me
      </button>
      
    </div>
  );
}
export default Task3;
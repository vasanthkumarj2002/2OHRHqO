import React, { useState } from 'react';
import style from "./task1.module.css"

const Task1 = () =>{
    const [count, setCount] = useState(0);
    const [bgColor, setBgColor] = useState('');
  
    const handleClick = () => {
      setCount(count + 1);
      setBgColor(getRandomColor());
    };
  
    const getRandomColor = () => {
      const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };
  
    return (
      <div>
        <h1> Assignment-1</h1>
        {bgColor && (
          <div style={{ marginTop: '10px' }}>
            <div
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: bgColor,
                borderRadius: '50%',
                marginTop: '10px',
              }}
            />
              Count: {count}
           
          </div> 
        )}
         
        <button style={{ backgroundColor: bgColor }} onClick={handleClick}>
          Click me to change color
        </button>
        <div className={style.empty}></div>
      </div>
      
    );
  };
export default Task1 ;

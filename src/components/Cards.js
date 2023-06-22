import React from 'react';
import './cards.css';

export default function Cards(props) {
  return (
    <>
      <div className='card'>
        <div className='header1'>
          <p>{props.header}</p>
        </div>
        <div className='container'>
          <p>{props.text1}</p>
          {/* <p>{props.text2}</p> */}
        </div>
      </div>
    </>
  );
}

import React from 'react';
import './cards.css';

export default function Cards(props) {
  const { handleClick } = props;
  const cardClicked = () => {
    handleClick(props.header);
  };
  return (
    <>
      <div onClick={cardClicked} className='card'>
        <div className={props.page ? 'header2' : 'header1'}>
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

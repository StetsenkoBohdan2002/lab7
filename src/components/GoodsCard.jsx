import React from 'react';

function GoodsCard(props) {
  return (
    <li style={{width:'30%'}}>
      <img style={{width:'100%'}} src={props.img} alt='New img' />
      <p>{props.name}</p>
      <p>
        <strong>{props.price}</strong>
      </p>
    </li>
  );
}

export default GoodsCard;

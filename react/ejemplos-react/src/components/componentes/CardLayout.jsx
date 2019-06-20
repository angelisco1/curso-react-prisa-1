import React from 'react';
import '../../styles/card.scss';

const CardLayout = (props) => {
  return (
    <div className="card">
      {props.children[1]}
      <hr/>
      {props.children[0]}
      {props.children[2]}
    </div>
  )
}

export default CardLayout;
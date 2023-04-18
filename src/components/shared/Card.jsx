import React from 'react';
import PropTypes from 'prop-types';

{
  /*Card takes children as a prop and displays children with 'card' styling passed to the div*/
}
function Card({ children, reverse }) {
  return (
    /*<div className={`card ${reverse && 'reverse'}`}>  
      {children}
    </div>*/

    <div
      className="card"
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000',
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;

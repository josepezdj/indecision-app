import React from 'react';

const Option = (props) => (
  <div className='option'>
    <p className='option__text'>{props.count}. {props.optionText} </p>
    <button
      className='button button--link'
      onClick={(e) => {
        props.handleRemoveOne(props.optionText)
      }}>
      remove
    </button>
  </div>
);
export default Option;
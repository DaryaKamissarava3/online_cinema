import React from 'react';

import './Button.css';

export const Button = ({
  className,
  btnText,
  clickFunction,
  btnType
  }) => {
  return (
    <button
      type={btnType}
      onClick={clickFunction}
      className={className}
    >
      {btnText}
    </button>
  );
};

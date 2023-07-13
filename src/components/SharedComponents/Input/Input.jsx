import React from 'react';

import './Input.css';

export const Input = ({
  type,
  value,
  name,
  className,
  placeholder,
  onChangeEvent,
  inpAutoComplete
  }) => {
  return (
   <input
     autoComplete={inpAutoComplete}
     name={name}
     type={type}
     value={value}
     className={className}
     placeholder={placeholder}
     onChange={onChangeEvent}
   />
  );
};

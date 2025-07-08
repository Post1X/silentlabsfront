import React from 'react';

import styles from './Input.module.scss';
import arrow from '../../assets/icons/svg/arrow.svg';

const Input = ({ type, name, placeholder, className, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      className={styles[`input__${className}`] || styles['input__primary']}
      onChange={onChange}
    />
  );
};

export default Input;

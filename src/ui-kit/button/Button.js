import React, { forwardRef } from 'react';

import arrow from '../../assets/icons/svg/arrow.svg';
import styles from './Button.module.scss';

const Button = forwardRef(({ children, onClick, className }, ref) => {
  const buttonClass = styles[`button__${className}`] || styles['button__primary'];
  const withArrow = className === 'primary' || className === 'primary_large';

  return (
    <button ref={ref} onClick={onClick} className={buttonClass} type="button">
      {withArrow ? (
        <>
          {children}
          <img className={styles.button__arrow_svg} src={arrow} alt="arrow" />
        </>
      ) : (
        children
      )}
    </button>
  );
});

export default Button;

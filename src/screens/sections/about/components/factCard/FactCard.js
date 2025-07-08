import React from 'react';

import styles from './FactCard.module.scss';

const FactCard = ({ title, text }) => {
  return (
    <div className={styles.fact__card}>
      <h3 className={styles.fact__card_title}>{title}</h3>
      <p className={styles.fact__card_text}>{text}</p>
    </div>
  );
};

export default FactCard;

import React from 'react';

import styles from './FactCard.module.scss';

const FactCard = ({ title, text, imgSrc, imgAlt }) => {
  return (
    <div className={styles.fact__card}>
      <div className={styles.fact__card_header}>
        <div className={styles.fact__card_header_container}>
          <h4 className={styles.fact__card_header_title}>{title}</h4>
          <img src={imgSrc} alt={imgAlt} className={styles.fact__card_header_icon} />
        </div>
      </div>
      <div className={styles.fact__cards_container}>
        <div className={styles.fact__cards_text_container}>
          <p className={styles.fact__container_text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FactCard;

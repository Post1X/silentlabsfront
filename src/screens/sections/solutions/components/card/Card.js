import React from 'react';

import styles from './Card.module.scss';

const Card = ({ title, text, src, alt, className }) => {
  const imgClass =
    className === 'product2'
      ? styles.card__container_img_product2
      : className === 'product3'
        ? styles.card__container_img_product3
        : className === 'product4'
          ? styles.card__container_img_product4
          : styles.card__container_img;

  return (
    <div className={styles.card}>
      <div className={styles.card__container}>
        <h3 className={styles.card__container_title}>{title}</h3>
        <p className={styles.card__container_text}>{text}</p>
        <img src={src} alt={alt} className={imgClass} />
      </div>
    </div>
  );
};

export default Card;

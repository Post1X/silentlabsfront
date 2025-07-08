import React from 'react';

import styles from './SocialCard.module.scss';

const SocialCard = ({ imgSrc, imgAlt, text, numText }) => {
  return (
    <div className={styles.social__card}>
      <div className={styles.social__card_container}>
        <div className={styles.social__card_container_header}>
          <p className={styles.header_text}>{text}</p>
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <p className={styles.num_text}>{numText}</p>
      </div>
    </div>
  );
};

export default SocialCard;

import React from 'react';

import styles from './Testimonial.module.scss';

import quoteUpIcon from '../../../../../assets/icons/quote-up-icon.png';

const TestimonialCard = ({ text, imgSrc, imgAlt, name }) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonial__container}>
        <div className={styles.testimonial__container_header}>
          <img src={quoteUpIcon} alt="quote up icon" />
        </div>
        <div className={styles.testimonial__text_wrapper}>
          <p className={styles.wrapper_text}>{text}</p>
        </div>
        <div className={styles.testimonial__container_footer}>
          <div className={styles.footer__user_info}>
            <img src={imgSrc} alt={imgAlt} className={styles.user__info_img} />
            <p className={styles.user__info_name}>{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

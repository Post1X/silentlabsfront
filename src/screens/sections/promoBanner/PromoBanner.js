import React from 'react';

import styles from './PromBanner.module.scss';
import Button from '../../../ui-kit/button/Button';

import product5 from '../../../assets/images/product5.png';

const PromoBanner = ({ onGetPrototypeClick }) => {
  return (
    <section className={styles.promo}>
      <div className={styles.promo__text_container}>
        <div className={styles.promo__text_container_content}>
          <h2 className={styles.promo__title}>
            Покажем прототип
            <br />
            до начала работы.
          </h2>
          <p className={styles.promo__text}>Вы увидите, как приложение закрывает ваши нужды</p>
          <Button className="secondary" onClick={onGetPrototypeClick}>Получить прототип</Button>
        </div>
      </div>
      <div className={styles.promo__image_container}>
        <img src={product5} alt="product5" />
      </div>
    </section>
  );
};

export default PromoBanner;

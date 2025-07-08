import React from 'react';

import styles from './CostInfo.module.scss';
import Button from '../../../ui-kit/button/Button';

const CostInfo = () => {
  return (
    <section className={styles.cost__info}>
      <div className={styles.cost__info_container}>
        <h1 className={styles.cost__info_container_title}>
          Узнайте стоимость
          <br />
          вашего приложения
          <br />
          за 2 минуты
        </h1>
        <Button className="primary">Получить расчёт</Button>
      </div>
    </section>
  );
};

export default CostInfo;

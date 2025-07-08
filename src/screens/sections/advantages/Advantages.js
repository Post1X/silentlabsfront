import React from 'react';

import styles from './Advantages.module.scss';
import FactCard from './components/factCard/FactCard';

import calendarIcon from '../../../assets/icons/calendar-icon.png';
import moneyBagIcon from '../../../assets/icons/money-bag-icon.png';
import phoneIcon from '../../../assets/icons/phone-icon.png';
import ninjaIcon from '../../../assets/icons/ninja-icon.png';
import safetyGlasses from '../../../assets/icons/safety-glasses-icon.png';

const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <div className={styles.advantages__container}>
        <div className={styles.advantages__header}>
          <h2 className={styles.advantages__header_title}>преимущества</h2>
        </div>
        <div className={styles.advantages__facts}>
          <FactCard
            title={
              <>
                Сроки
                <br />
                от 4 недель
              </>
            }
            text={
              <>
                Начинаем быстро, <br /> не затягиваем. <br /> Продукт — в срок, <br /> без откатов и
                сюрпризов.
              </>
            }
            imgSrc={calendarIcon}
            imgAlt="calendar icon"
          />
          <FactCard
            title={
              <>
                на 30%
                <br />
                дешевле рынка
              </>
            }
            text={
              <>
                Чёткий прайс, прозрачная
                <br />
                смета. Без скрытых
                <br />
                платежей
              </>
            }
            imgSrc={moneyBagIcon}
            imgAlt="money bag icon"
          />
          <FactCard
            title={
              <>
                Поддержка
                <br />
                24/7
              </>
            }
            text={
              <>
                Решаем вопросы
                <br />
                по договору. Отвечаем
                <br />
                в мессенджерах,
                <br />
                не пропадаем.
              </>
            }
            imgSrc={phoneIcon}
            imgAlt="phone icon"
          />
          <FactCard
            title={
              <>
                NDA
                <br />и безопасность
              </>
            }
            text={
              <>
                Фиксируем все
                <br />
                договорённости, защищаем
                <br />
                ваши данные и идеи.
              </>
            }
            imgSrc={ninjaIcon}
            imgAlt="ninja icon"
          />
          <FactCard
            title={
              <>
                Чёткий план
                <br />и контроль
              </>
            }
            text={
              <>
                Работаем по этапам
                <br />
                с отчётами каждую неделю. Вы в курсе всего,
                <br />
                что происходит.
              </>
            }
            imgSrc={safetyGlasses}
            imgAlt="safety glasses icon"
          />
        </div>
      </div>
    </section>
  );
};

export default Advantages;

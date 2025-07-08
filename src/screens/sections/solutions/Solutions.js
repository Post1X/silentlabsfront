import React, { useRef, useEffect, useState } from 'react';

import styles from './Solutions.module.scss';

import product1 from '../../../assets/images/product1.png';
import product2 from '../../../assets/images/product2.png';
import product3 from '../../../assets/images/product3.png';
import product4 from '../../../assets/images/product4.png';

import Card from './components/card/Card';
import Button from '../../../ui-kit/button/Button';

const Solutions = () => {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`fadeInUp${visible ? ' visible' : ''} ${styles.solutions}`}>
      <div className={styles.solutions__container}>
        <div className={styles.solutions__header}>
          <h2 className={styles.solutions__header_title}>Решения</h2>
          <p className={styles.solutions__header_text}>
            Мы понимаем задачи бизнеса —
            <br />и предлагаем конкретные решения
          </p>
        </div>
        <div className={styles.solutions__section_cards}>
          <Card
            title="Интернет-магазины"
            text={
              <>
                <span>Устали терять заказы и вести учёт вручную?</span>
                <br />
                Разработаем приложение с полноценным каталогом, корзиной, онлайн-оплатой и
                <br />
                аналитикой — чтобы продажи шли чётко, а клиенты возвращались.
              </>
            }
            src={product1}
            alt="product1"
          />
          <Card
            title="Склады и кассы"
            text={
              <>
                Создаём не просто ПО, а технологическую экосистему, которая масштабируется
                <br />
                вместе с вашим бизнесом. 
                <span>
                {" "}Интеграции, автоматизация, совместимость с внешними
                  <br />
                  сервисами
                </span>
                {" "}— всё для устойчивого развития и цифровой зрелости.
              </>
            }
            src={product2}
            alt="product2"
            className="product2"
          />
          <Card
            title="Корпоративные приложения"
            text={
              <>
                <span>
                  {' '}
                  Невозможно контролировать процессы и держать сотрудников в одном инфополе?
                </span>{' '}
                <br />
                Соберём для вас внутреннюю платформу: от трекера задач и CRM до портала
                <br />
                компании — всё под нужды вашего бизнеса.
              </>
            }
            src={product3}
            alt="product3"
            className="product3"
          />
          <Card
            title="Аналитика и отчётность"
            text={
              <>
                <span>Нет ясности в данных, решения принимаются на интуиции?</span>
                <br />
                Построим аналитическую панель с визуальными дашбордами, отчётами в 1 клик и <br />{' '}
                экспортом в нужные форматы.
              </>
            }
            src={product4}
            alt="product4"
            className="product4"
          />
          <Button className="primary">расчитать стоимость</Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

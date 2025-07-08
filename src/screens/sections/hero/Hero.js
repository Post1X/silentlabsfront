import React, { useRef, useEffect, useState } from 'react';
import styles from './Hero.module.scss';
import Button from '../../../ui-kit/button/Button';

const Hero = ({ onDiscussProjectClick }) => {
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
    <section ref={sectionRef} className={`fadeInUp${visible ? ' visible' : ''} ${styles.hero}`}>
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>
            Создаём приложения, <br /> которые работают <br /> на результат
          </h1>
          <p className={styles.hero__text}>
            Разработаем мобильное,{' '}
            <span className={styles.hero__text_highlight}>веб или десктопное приложение</span>
            <br />
            для автоматизации вашего бизнеса.{' '}
            <span className={styles.hero__text_highlight}>На 30% дешевле </span>
            <br />
            конкурентов, и <span className={styles.hero__text_highlight}>всего за 4 недели</span>.
          </p>
          <Button className="primary" onClick={onDiscussProjectClick}>Обсудить проект</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

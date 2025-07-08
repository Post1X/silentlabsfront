import React, { useRef, useEffect, useState } from 'react';

import styles from './About.module.scss';
import FactCard from './components/factCard/FactCard';

const About = () => {
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
    <section ref={sectionRef} className={`fadeInUp${visible ? ' visible' : ''} ${styles.about}`}>
      <div className={styles.about__container}>
        <div className={styles.about__header}>
          <h2 className={styles.about__header_title}>о нас</h2>
        </div>
        <div className={styles.about__facts}>
          <FactCard title="3+" text="лет на рынке" />
          <FactCard title="15+" text="проектов" />
          <FactCard title="10" text="человек в команде" />
          <FactCard
            title="98%"
            text={
              <>
                клиентов остаются <br /> на поддержке
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default About;

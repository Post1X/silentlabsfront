import React, { useEffect, useRef, useState } from 'react';

import styles from './Testimonials.module.scss';
import TestimonialCard from './components/testimonialCard/TestimonialCard';

import userLogo from '../../../assets/images/user/user-img.jpg';

const testimonialsData = [
  {
    text: (
      <>
        Заказывал лендинг. Очень доволен качеством и<br />
        сроками разработки. Лендинг полностью<br />
        соответствует требованиям, и я с уверенностью<br />
        могу рекомендовать эту компанию друзьям
      </>
    ),
    imgSrc: userLogo,
    imgAlt: 'user logo',
    name: 'Илья'
  },
  {
    text: (
      <>
        Всё понравилось! Профессиональный подход,<br />
        быстрое выполнение задачи и отличная поддержка.<br />
        Буду обращаться ещё!
      </>
    ),
    imgSrc: userLogo,
    imgAlt: 'user logo',
    name: 'Ирина'
  },
  {
    text: (
      <>
        Отличная команда, помогли реализовать сложный проект<br />
        с нуля. Всегда на связи, всё по делу.<br />
        Спасибо!
      </>
    ),
    imgSrc: userLogo,
    imgAlt: 'user logo',
    name: 'Владимир'
  },
  {
    text: (
      <>
        Очень доволен сотрудничеством.<br />
        Всё чётко, быстро, профессионально.<br />
        Рекомендую!
      </>
    ),
    imgSrc: userLogo,
    imgAlt: 'user logo',
    name: 'Сергей'
  }
];

const Testimonials = () => {
  const contentRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const content = contentRef.current;

    const onMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX - content.offsetLeft;
      scrollLeft.current = content.scrollLeft;
      content.classList.add(styles.dragging);
    };

    const onMouseLeave = () => {
      isDragging.current = false;
      content.classList.remove(styles.dragging);
    };

    const onMouseUp = () => {
      isDragging.current = false;
      content.classList.remove(styles.dragging);
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - content.offsetLeft;
      const walk = x - startX.current;
      content.scrollLeft = scrollLeft.current - walk;
    };

    content?.addEventListener('mousedown', onMouseDown);
    content?.addEventListener('mouseleave', onMouseLeave);
    content?.addEventListener('mouseup', onMouseUp);
    content?.addEventListener('mousemove', onMouseMove);

    return () => {
      content.removeEventListener('mousedown', onMouseDown);
      content.removeEventListener('mouseleave', onMouseLeave);
      content.removeEventListener('mouseup', onMouseUp);
      content.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

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
    <section ref={sectionRef} className={`fadeInUp${visible ? ' visible' : ''} ${styles.testimonials}`}>
      <div className={styles.testimonials__container}>
        <div className={styles.testimonials__container_header}>
          <h2 className={styles.testimonials__container_header_title}>Отзывы клиентов</h2>
        </div>
        <div ref={contentRef} className={styles.testimonials__content}>
          {testimonialsData.map((item, i) => (
            <TestimonialCard
              key={i}
              text={item.text}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

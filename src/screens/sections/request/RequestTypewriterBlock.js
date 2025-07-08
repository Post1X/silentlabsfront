import React, { useState, useEffect, useRef, memo } from 'react';
import styles from './Request.module.scss';

const TypewriterText = memo(({ text, speed = 30, className, start, onDone }) => {
  const [displayed, setDisplayed] = useState('');
  const startedRef = useRef(false);
  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;
    let i = 0;
    setDisplayed('');
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        if (onDone) onDone();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, start, onDone]);
  return <span className={className}>{displayed}</span>;
});

const RequestTypewriterBlock = () => {
  const textBlockRef = useRef();
  const [startType, setStartType] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartType(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (textBlockRef.current) observer.observe(textBlockRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.admin__info_text_container_content} ref={textBlockRef}>
      <span className={styles.content__title}>Привет, я Жанна 👋 Администратор Silent Automations. </span>
      <TypewriterText
        text="Если у вас есть проект или идея — заполните форму, и я помогу найти подходящее решение для вашего бизнеса."
        className={styles.content__text}
        start={startType}
      />
    </div>
  );
};

export default RequestTypewriterBlock; 
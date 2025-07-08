import React, { useState, useEffect, useRef, memo } from 'react';

import styles from './Request.module.scss';

import adminImg from '../../../assets/images/user/admin-img.png';
import Input from '../../../ui-kit/input/Input';
import Button from '../../../ui-kit/button/Button';
import RequestTypewriterBlock from './RequestTypewriterBlock';

// Глобальные refs для независимой анимации
const globalTypewriterState = {
  startType: false,
  firstDone: false,
  firstText: '',
};

// TypewriterText component (мемоизированный, независимый)
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

const Request = ({ requestButtonRef }) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const textBlockRef = useRef();
  const [startType, setStartType] = useState(false);
  const [firstDone, setFirstDone] = useState(false);
  const [firstText, setFirstText] = useState('');

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

  const handleChange = (key, newValue) => {
    setValues((prev) => ({
      ...prev,
      [key]: newValue,
    }));
  };

  const isFormValid =
    values.name.trim() &&
    values.email.trim() &&
    values.phone.trim() &&
    values.project.trim();

  const handleSend = async () => {
    setIsSending(true);
    setError('');
    setSuccess(false);
    const TELEGRAM_BOT_TOKEN = '7824671826:AAG1Ev578oxKo0VzwH5z9WpweAmozlBLlFU';
    const TELEGRAM_CHAT_ID = '-4801164999';
    const message = `Заявка с сайта!%0AИмя: ${values.name || '-'}%0AПочта: ${values.email || '-'}%0AТелефон: ${values.phone || '-'}%0AПроект: ${values.project || '-'}`;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${message}`;
    console.log('Отправка данных в Telegram:', url);
    try {
      const resp = await fetch(url);
      console.log('Ответ Telegram:', resp);
      if (resp.ok) {
        setSuccess(true);
        setValues({ name: '', email: '', phone: '', project: '' });
        console.log('Заявка успешно отправлена!');
      } else {
        setError('Ошибка отправки. Попробуйте позже.');
        console.log('Ошибка при отправке:', resp.status, resp.statusText);
      }
    } catch (err) {
      setError('Ошибка отправки. Попробуйте позже.');
      console.log('Ошибка при fetch:', err);
    }
    setIsSending(false);
  };

  return (
    <section className={styles.request}>
      <div className={styles.request__container}>
        <div className={styles.request__container_content}>
          <div className={styles.contact__invite}>
            <h2 className={styles.contact__invite_title}>
              Появились вопросы
              <br />
              или хотите обсудить
              <br />
              проект?
            </h2>
            <div className={styles.admin__info}>
              <div className={styles.admin__info_img_container}>
                <img src={adminImg} alt="" className={styles.admin__info_img} />
              </div>
              <div className={styles.admin__info_text_container}>
                <RequestTypewriterBlock />
              </div>
            </div>
          </div>
          <div className={styles.request__form}>
            <div className={styles.request__form_primary}>
              <Input
                type="text"
                placeholder="Ваше имя"
                name="name"
                className="primary"
                value={values.name}
                onChange={e => handleChange('name', e.target.value)}
              />
              <Input
                type="email"
                placeholder="Ваша почта"
                name="email"
                className="primary"
                value={values.email}
                onChange={e => handleChange('email', e.target.value)}
              />
              <Input
                type="tel"
                placeholder="Ваш номер телефона"
                name="phone"
                className="primary"
                value={values.phone}
                onChange={e => handleChange('phone', e.target.value)}
              />
            </div>
            <div className={styles.request__form_secondary}>
              <Input
                type="text"
                placeholder="Опишите коротко, какой проект вас интересует и самый удобный для вас способ связи"
                name="project"
                className="secondary"
                value={values.project}
                onChange={e => handleChange('project', e.target.value)}
              />
              <Button
                className="primary_large"
                ref={requestButtonRef}
                type="button"
                onClick={handleSend}
                disabled={isSending}
              >
                {isSending ? 'Отправка...' : 'Оставить заявку'}
              </Button>
              {success && <div style={{ color: 'green', marginTop: 8 }}>Заявка отправлена!</div>}
              {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
              <a href="/" className={styles.request__form_text}>
                Отправляя заявку, вы соглашаетесь на{' '}
                <span className={styles.text_highlight}>обработку персональных данных</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Request;

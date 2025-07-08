import React, { useRef } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/icons/Logo-_1_.svg';
import Button from '../../ui-kit/button/Button';

const Header = ({ onNav }) => {
  const aboutRef = useRef(null);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo_area}>
          <a href="/" onClick={scrollToTop}>
            <img src={logo} alt="logo" className={styles.logo} />
          </a>
        </div>
        <nav className={styles.header__navigation}>
          <ul className={styles.header__nav_list}>
            <li className={styles.header__nav_link} onClick={onNav?.solutions}>Решения</li>
            <li className={styles.header__nav_link} onClick={onNav?.about}>О нас</li>
            <li className={styles.header__nav_link} onClick={onNav?.advantages}>Преимущества</li>
            <li className={styles.header__nav_link} onClick={onNav?.portfolio}>Портфолио</li>
            <li className={styles.header__nav_link} onClick={onNav?.testimonials}>Отзывы</li>
            <li className={styles.header__nav_link} onClick={onNav?.contacts}>Контакты</li>
          </ul>
          <Button className="secondary" onClick={onNav?.getSolution}>получить решение</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
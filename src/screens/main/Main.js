import React, { useRef } from 'react';
import styles from './Main.module.scss';

import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';

import Hero from '../sections/hero/Hero';
import Solutions from '../sections/solutions/Solutions';
import About from '../sections/about/About';
import Advantages from '../sections/advantages/Advantages';
import PromoBanner from '../sections/promoBanner/PromoBanner';
import Portfolio from '../sections/portfolio/Portfolio';
import Testimonials from '../sections/testimonials/Testimonials';
import Request from '../sections/request/Request';
import SocialPanel from '../sections/socialPanel/SocialPanel';
import CostInfo from '../sections/costInfo/CostInfo';

const Main = () => {
  const requestButtonRef = useRef(null);
  const solutionsRef = useRef(null);
  const aboutRef = useRef(null);
  const advantagesRef = useRef(null);
  const portfolioRef = useRef(null);
  const testimonialsRef = useRef(null);
  const footerRef = useRef(null);

  const handleDiscussProjectClick = () => {
    requestButtonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  const handleNav = {
    solutions: () => solutionsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
    about: () => aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
    advantages: () => advantagesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
    portfolio: () => portfolioRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
    testimonials: () => testimonialsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
    contacts: () => footerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }),
    getSolution: () => requestButtonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
  };

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <Header onNav={handleNav} />
        <Hero onDiscussProjectClick={handleDiscussProjectClick} />
        <div ref={solutionsRef}><Solutions /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={advantagesRef}><Advantages /></div>
        <PromoBanner onGetPrototypeClick={handleDiscussProjectClick} />
        <div ref={portfolioRef}><Portfolio /></div>
        <div ref={testimonialsRef}><Testimonials /></div>
        <Request requestButtonRef={requestButtonRef} />
        <SocialPanel />
        <CostInfo />
        <div ref={footerRef}><Footer /></div>
      </main>
    </div>
  );
};

export default Main;

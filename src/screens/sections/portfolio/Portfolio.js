import React, { useState } from 'react';
import styles from './Portfolio.module.scss';

import arrowIcon from '../../../assets/icons/svg/arrow.svg';
import overlayArrowIcon from '../../../assets/icons/arrow-overlay-icon.png';
import Modal from '../../sections/portfolio/components/Modal/Modal';
import { slidesData } from './data/SlidesData';

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  return (
    <section className={styles.portfolio}>
      <div className={styles.portfolio__container}>
        <div className={styles.portfolio__header}>
          <h1 className={styles.portfolio__header_title}>с чем мы имели опыт</h1>
          <p className={styles.portfolio__header_text}>
            Мы разработали десятки проектов
            <br />
            в самых разных сферах — от e-commerce
            <br />и логистики до образования и финтеха.
          </p>
        </div>

        <div className={styles.portfolio__slider_container}>
          <div className={styles.portfolio__slider_wrapper} onClick={openModal}>
            <div className={styles.slider__wrapper_overlay_container}>
              <img src={overlayArrowIcon} alt="arrow icon" className={styles.wrapper_overlay_img} />
            </div>
            <div className={styles.slider__wrapper_overlay}></div>
            <h3 className={styles.portfolio__slider_wrapper_title}>
              {slidesData[currentSlideIndex].title}
            </h3>
            <img
              src={slidesData[currentSlideIndex].preview}
              alt="preview"
              className={styles.slider__img}
            />
          </div>

          <div className={styles.portfolio__slider_controls}>
            <div
              className={styles.portfolio__slider_left_control}
              onClick={prevSlide}
              aria-label="Previous slide"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && prevSlide()}
            >
              <img src={arrowIcon} alt="arrow left" className={styles.slider__left_icon} />
            </div>

            <div className={styles.portfolio__slider_controls_track}>
              <div
                className={styles.portfolio__slider_controls_fill}
                style={{
                  width: `${((currentSlideIndex + 1) / slidesData.length) * 100}%`,
                }}
              ></div>
            </div>

            <div
              className={styles.portfolio__slider_right_control}
              onClick={nextSlide}
              aria-label="Next slide"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && nextSlide()}
            >
              <img src={arrowIcon} alt="arrow right" className={styles.slider__right_icon} />
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {slidesData[currentSlideIndex].images.map((src, i) => (
          <img key={i} src={src} alt={`modal slide ${i + 1}`} className={styles.modal__image} />
        ))}
      </Modal>
    </section>
  );
};

export default Portfolio;

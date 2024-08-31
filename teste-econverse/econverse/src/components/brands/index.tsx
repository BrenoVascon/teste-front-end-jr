import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './brands.module.sass';
import { Navigation } from 'swiper/modules';

import brandLogo from '../../assets/images/logoBrands.svg';
import arrowBrand from '../../assets/images/arrow-brands.svg';

export default function Brands() {
  const brandImages = Array(15).fill(brandLogo);

  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={5}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        }}
      >
        {brandImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={styles.brandItem}>
              <img src={image} alt={`Brand Logo ${index + 1}`} width={172} height={172} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.swiperButtonPrev}>
        <img src={arrowBrand} width={40} height={40} alt='Arrow Left' style={{ transform: 'rotate(180deg)' }} />
      </div>
      <div className={styles.swiperButtonNext}>
        <img src={arrowBrand} width={40} height={40} alt='Arrow Right' />
      </div>
    </div>
  );
}

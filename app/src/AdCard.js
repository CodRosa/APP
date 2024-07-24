// src/AdCard.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const AdCard = () => {
  const slides = [
    { id: 1, image: 'slide1.jpg', text: 'Promoção 1' },
    { id: 2, image: 'slide2.jpg', text: 'Promoção 2' },
    { id: 3, image: 'slide3.jpg', text: 'Promoção 3' },
  ];

  return (
    <div className="ad-card">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.text} />
            <p>{slide.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdCard;

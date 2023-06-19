import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import data from '../public/data.js'
function App() {
  let window = 1
  const cards = data.map((item, index) => {
    return (
      <SwiperSlide key={item.id}>
            <Card
            key={index}
            {...item}
     />
      </SwiperSlide>
    )
  })
  return (
    <>
      <Navbar />
      <Hero />
      <Swiper
        spaceBetween={50}
        slidesPerView={window}
        breakpoints = {{
          1024: {
              slidesPerView: 4,
              spaceBetweenSlides: 150
          },
          768: {
              slidesPerView: 3,
              spaceBetweenSlides: 200
          },
          500: {
            slidesPerView: 2,
            spaceBetweenSlides: 200
        },
        400: {
          slidesPerView: 1,
          spaceBetweenSlides: 200
      }
      }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
    >
      {cards}
    </Swiper>
    </>
  )
}

export default App

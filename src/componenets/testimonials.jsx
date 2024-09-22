import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Container } from 'react-bootstrap';
import comma from "../assets/comma.webp"
import pimg from "../assets/p-img.webp"
import { Navigation } from 'swiper/modules';
export default function Testimonial() {
  return (
    <>
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            
          }}
          navigation={true}
          modules={[Navigation]}
        className="mySwiper px-2 my-5 py-2"
      >
        <SwiperSlide className='testimonial-slide p-3'>
            <div className="img">
                <img height="40px" src={comma} alt="" />
            </div>
            <div className="reviews">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis minima at adipisci inventore, repellendus quisquam deleniti excepturi voluptatum voluptatem qui voluptas, quasi delectus quas porro beatae vitae. Facilis, mollitia ut.</p>
<div className="person d-flex align-items-center" style={{gap:"10px"}}>
    <div className="p-img">
        <img src={pimg} alt="" />
    </div>
    <div className="p-name">
        <div className="name"><h5>John Smith</h5></div>
        <div className="p-prof"><h6>CEO</h6></div>
    </div>
</div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='testimonial-slide p-3'>
            <div className="img">
                <img height="40px" src={comma} alt="" />
            </div>
            <div className="reviews">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis minima at adipisci inventore, repellendus quisquam deleniti excepturi voluptatum voluptatem qui voluptas, quasi delectus quas porro beatae vitae. Facilis, mollitia ut.</p>
<div className="person d-flex align-items-center" style={{gap:"10px"}}>
    <div className="p-img">
        <img src={pimg} alt="" />
    </div>
    <div className="p-name">
        <div className="name"><h5>John Smith</h5></div>
        <div className="p-prof"><h6>CEO</h6></div>
    </div>
</div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='testimonial-slide p-3'>
            <div className="img">
                <img height="40px" src={comma} alt="" />
            </div>
            <div className="reviews">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis minima at adipisci inventore, repellendus quisquam deleniti excepturi voluptatum voluptatem qui voluptas, quasi delectus quas porro beatae vitae. Facilis, mollitia ut.</p>
<div className="person d-flex align-items-center" style={{gap:"10px"}}>
    <div className="p-img">
        <img src={pimg} alt="" />
    </div>
    <div className="p-name">
        <div className="name"><h5>John Smith</h5></div>
        <div className="p-prof"><h6>CEO</h6></div>
    </div>
</div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='testimonial-slide p-3'>
            <div className="img">
                <img height="40px" src={comma} alt="" />
            </div>
            <div className="reviews">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis minima at adipisci inventore, repellendus quisquam deleniti excepturi voluptatum voluptatem qui voluptas, quasi delectus quas porro beatae vitae. Facilis, mollitia ut.</p>
<div className="person d-flex align-items-center" style={{gap:"10px"}}>
    <div className="p-img">
        <img src={pimg} alt="" />
    </div>
    <div className="p-name">
        <div className="name"><h5>John Smith</h5></div>
        <div className="p-prof"><h6>CEO</h6></div>
    </div>
</div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='testimonial-slide p-3'>
            <div className="img">
                <img height="40px" src={comma} alt="" />
            </div>
            <div className="reviews">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis minima at adipisci inventore, repellendus quisquam deleniti excepturi voluptatum voluptatem qui voluptas, quasi delectus quas porro beatae vitae. Facilis, mollitia ut.</p>
<div className="person d-flex align-items-center" style={{gap:"10px"}}>
    <div className="p-img">
        <img src={pimg} alt="" />
    </div>
    <div className="p-name">
        <div className="name"><h5>John Smith</h5></div>
        <div className="p-prof"><h6>CEO</h6></div>
    </div>
</div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='testimonial-slide p-3'>
            <div className="img">
                <img height="40px" src={comma} alt="" />
            </div>
            <div className="reviews">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis minima at adipisci inventore, repellendus quisquam deleniti excepturi voluptatum voluptatem qui voluptas, quasi delectus quas porro beatae vitae. Facilis, mollitia ut.</p>
<div className="person d-flex align-items-center" style={{gap:"10px"}}>
    <div className="p-img">
        <img src={pimg} alt="" />
    </div>
    <div className="p-name">
        <div className="name"><h5>John Smith</h5></div>
        <div className="p-prof"><h6>CEO</h6></div>
    </div>
</div>
            </div>
        </SwiperSlide>
      </Swiper>
      </Container>
    </>
  );
}

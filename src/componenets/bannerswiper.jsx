import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Button from "./button";
import {Autoplay}  from 'swiper/modules';

function  Banner() {
    return (
        <>
      <Swiper 
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
      className="mySwiper">
        <SwiperSlide className="sllde slide-1 ps-5 color">
           <h1 className="color">Brightening Smiles Through <br/>Better Dentistry</h1>
<Button>Read More</Button>
            </SwiperSlide>
        <SwiperSlide className="sllde slide-2 ps-5 color">
        <h1 className="color">Brightening Smiles Through <br/>Better Dentistry</h1>
        <Button>Read More</Button>
        </SwiperSlide>
        <SwiperSlide className="sllde slide-3 ps-5 color">
        <h1 className="color">Brightening Smiles Through <br/>Better Dentistry</h1>
        <Button>Read More</Button>
        </SwiperSlide>
        <SwiperSlide className="sllde slide-4 ps-5 color">
        <h1 className="color">Brightening Smiles Through <br/>Better Dentistry</h1>
        <Button>Read More</Button>
        </SwiperSlide>
        <SwiperSlide className="sllde slide-5 ps-5 color">
        <h1 className="color">Brightening Smiles Through <br/>Better Dentistry</h1>
        <Button>Read More</Button>
        </SwiperSlide>
        <SwiperSlide className="sllde slide-6 ps-5 color">
        <h1 className="color">Brightening Smiles Through <br/>Better Dentistry</h1>
        <Button>Read More</Button>
        </SwiperSlide>
      
      </Swiper>
      </>
    );
  };
  export default Banner
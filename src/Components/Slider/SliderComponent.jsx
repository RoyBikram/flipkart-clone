import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./SliderStyles.scss";
import data from '../../Data/sliderImg.js';

import SwiperCore, {
  Navigation
} from 'swiper/core';

SwiperCore.use([Navigation]);

const Slider = () => {
    return (
        <Swiper slidesPerView={1} spaceBetween={0} loop={true} navigation={true} className="mySwiper">
            {
                data.map((each,index) => (
                    <SwiperSlide key={index}>
                        <img src={each} alt="" />
                    </SwiperSlide>
                ))
            }
            </Swiper>
     );
}
 
export default Slider;



import  { useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../index.css';
import '../App.css';
import { EffectCoverflow } from 'swiper/modules';
import { buttons } from "../data/Buttons.jsx";
import Slide from "../desktop/slide.jsx";
import {FloatButton} from "antd";
import {LogoutOutlined} from "@ant-design/icons";

export default function DesktopComponent() {
    const [swiperRef, setSwiperRef] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.activeIndex);
    };

    return (
        <div>
            <div>
                <p>Компонент</p>
            </div>
            <Swiper
                onSwiper={setSwiperRef}
                onSlideChange={handleSlideChange}
                className="mySwiper"
                spaceBetween={50}
                effect={'coverflow'}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 100,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow]}
            >
                <SwiperSlide><Slide id={1}/></SwiperSlide>
                <SwiperSlide><Slide id={2}/></SwiperSlide>
                <SwiperSlide><Slide id={3}/></SwiperSlide>
                <SwiperSlide><Slide id={4}/></SwiperSlide>
                <SwiperSlide><Slide id={5}/></SwiperSlide>
                <SwiperSlide><Slide id={6}/></SwiperSlide>
                <SwiperSlide><Slide id={7}/></SwiperSlide>
                <SwiperSlide><Slide id={8}/></SwiperSlide>
                <SwiperSlide><Slide id={9}/></SwiperSlide>
                <SwiperSlide><Slide id={10}/></SwiperSlide>
                <SwiperSlide><Slide id={11}/></SwiperSlide>
                <SwiperSlide><Slide id={12}/></SwiperSlide>
                <SwiperSlide><Slide id={13}/></SwiperSlide>
                <SwiperSlide><Slide id={14}/></SwiperSlide>
                <SwiperSlide><Slide id={15}/></SwiperSlide>
                <SwiperSlide><Slide id={16}/></SwiperSlide>
                <SwiperSlide><Slide id={17}/></SwiperSlide>
                <SwiperSlide><Slide id={18}/></SwiperSlide>
                <SwiperSlide><Slide id={19}/></SwiperSlide>
                <SwiperSlide><Slide id={20}/></SwiperSlide>

                <div className={"buttons-container"}>
                    <div>
                        <button onClick={() => swiperRef?.slidePrev()}>
                            <img src={'/public/left.svg'} alt={'img'} />
                            {buttons[currentSlide]?.prev.text || 'Назад'}
                            <img
                                src={buttons[currentSlide]?.prev.logo} alt={'img'} />
                        </button>
                    </div>
                    <div>
                        <button onClick={() => swiperRef?.slideNext()}>
                            <img
                                src={buttons[currentSlide]?.next.logo}
                                alt={'img'}
                            />
                            {buttons[currentSlide]?.next.text || 'Вперед'}
                            <img src={'/public/right.svg'} alt={'img'} />
                        </button>
                    </div>
                </div>
            </Swiper>
            <FloatButton tooltip={<div>Повернутися</div>} icon={<LogoutOutlined/>} href={'https://mis.e-life.com.ua/#product'}/>
        </div>
    );
}

import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as Scissors } from '../../assets/icons/scissors.svg'
import { ReactComponent as ElectricRazor } from '../../assets/icons/electric-razor.svg'
import { ReactComponent as Cleanser } from '../../assets/icons/cleanser.svg'
import { ReactComponent as FrameLeft } from '../../assets/icons/frame-left.svg'
import { ReactComponent as FrameRight } from '../../assets/icons/frame-right.svg'

const services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          slidesToShow: 1,
          autoplay:true,
          draggable: true,
        },
      },
    ],
  };
  return (
    <main className="w-full flex flex-col justify-center items-center relative pt-16 lg:pb-64" id="services">
      <h1 className={`text-pro-dark-blue text-4xl text-center font-Catamaran font-bold md:mb-5 md:text-left sm:text-5xl lg:text-6xl xl:text-7xl`}>Services We <span className="text-pro-yellow">Provide</span></h1>
      <Slider {...settings} className="w-full p-10 sm:px-32 md:px-48 lg:p-10 lg:flex lg:flex-row lg:justify-center lg:items-center">
          <div className="w-full !flex flex-col items-center justify-center border-b-4 border-sky-light rounded-3xl bg-pro-white-1 p-10 lg:!w-9/12 !important">
            <div className="w-5/12 px-5 py-4 mb-10 border-b border-sky-blue rounded-xl bg-pro-white-2">
             <Scissors className="w-full h-full"/>
            </div>
            <h1 className="font-Catamaran font-bold text-pro-dark-blue text-3xl mb-5">Hair Cut</h1>
            <p className="font-Catamaran font-normal text-pro-dark-blue text-center opacity-65">long established fact that a reacted by the readable content of hen looking at.</p>
          </div>
          <div className="w-full !flex flex-col items-center justify-center border-b-4 border-sky-light rounded-3xl bg-pro-white-1 p-10 lg:!w-9/12 !important">
            <div className="w-5/12 px-5 py-4 mb-10 border-b border-sky-blue rounded-xl bg-pro-white-2">
             <ElectricRazor className="w-full h-full"/>
            </div>
            <h1 className="font-Catamaran font-bold text-pro-dark-blue text-3xl mb-5">Beard Cut</h1>
            <p className="font-Catamaran font-normal text-pro-dark-blue text-center opacity-65">long established fact that a reacted by the readable content of hen looking at.</p>
          </div>
          <div className="w-full !flex flex-col items-center justify-center border-b-4 border-sky-light rounded-3xl bg-pro-white-1 p-10 lg:!w-9/12 !important">
            <div className="w-5/12 px-5 py-4 mb-10 border-b border-sky-blue rounded-xl bg-pro-white-2">
             <Cleanser className="w-full h-full"/>
            </div>
            <h1 className="font-Catamaran font-bold text-pro-dark-blue text-3xl mb-5">Facial Pack</h1>
            <p className="font-Catamaran font-normal text-pro-dark-blue text-center opacity-65">long established fact that a reacted by the readable content of hen looking at.</p>
          </div>
        </Slider>
        <FrameLeft className={`hidden absolute bottom-0 right-0 rotate-180 lg:block`}/>
        <FrameRight className={`hidden absolute bottom-0 left-0 rotate-180 lg:block`}/>
    </main>
  );
};

export default services;

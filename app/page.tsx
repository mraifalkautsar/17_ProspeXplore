'use client';
import Link from 'next/link';
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
//import './styles.css';
import React, { useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 

const slideData = [
  { title: "Sekolah Teknik Elektro Informatika (STEI)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus," },
  { title: "Fakultas Teknik Industri (FTI)", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Duis aute irure dolor in reprehenderit," },
  { title: "Fakultas Teknik Mesin dan Dirgantara (FTMD)", description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ," },
  { title: "Sekolah Teknik Elektro Informatika (STEI)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus," },
  { title: "Fakultas Teknik Industri (FTI)", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Duis aute irure dolor in reprehenderit," },
  { title: "Fakultas Teknik Mesin dan Dirgantara (FTMD)", description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ," },
  { title: "Sekolah Teknik Elektro Informatika (STEI)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus," },
  { title: "Fakultas Teknik Industri (FTI)", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Duis aute irure dolor in reprehenderit," },
  { title: "Fakultas Teknik Mesin dan Dirgantara (FTMD)", description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ," },
  { title: "Sekolah Teknik Elektro Informatika (STEI)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus," },
  { title: "Fakultas Teknik Industri (FTI)", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Duis aute irure dolor in reprehenderit," },
  { title: "Fakultas Teknik Mesin dan Dirgantara (FTMD)", description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ," },
  { title: "Sekolah Teknik Elektro Informatika (STEI)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus," },
  { title: "Fakultas Teknik Industri (FTI)", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Duis aute irure dolor in reprehenderit," },
  { title: "Fakultas Teknik Mesin dan Dirgantara (FTMD)", description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ," },
];



export default function Home() {

  function slide(title: string, description: string) {
    return (
      <div className="bg-[#1A3594] shadow-lg rounded-lg p-4 text-white flex flex-col items-center 
                      w-full md:w-[250px] sm:w-[200px] h-[400px] md:h-[350px] sm:h-[300px]">
        <div className="w-full h-[200px] md:h-[175px] sm:h-[150px] mb-4 relative">
          <Image 
            src="/comp.png" 
            alt="Slide Image" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-grow">
          <p className="text-left text-lg font-semibold mb-2">{title}</p>
          <p className="text-sm overflow-hidden text-ellipsis">{description}</p>
        </div>
      </div>
    );
  }
  
  
  return (
    <main>

      <section id="hero-section" className="pt-24 max-w-full mx-auto px-4 flex items-center justify-center bg-gradient-to-br from-[#1A3594] to-[#6B58B3]">
        <div className="container flex flex-wrap items-center justify-center">
            <div className="flex flex-wrap">
              <div className="w-full self-center px-4 md:w-1/2 ">
                <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl xl:text-3xl">Welcome to, <span className="block font-bold text-dark text-4xl mt-1 md:text-5xl lg:text-6xl xl:text-7xl mb-4">ProspeXplore</span></h1>
                <h2 className="font-medium text-white text-large mb-8 xl:text-md">Unlock Your Future with Prospexplore!</h2>
                <p className="text-xs text-white mb-10 xl:text-md">Easily explore career paths and opportunities for ITB graduates. Find the roles, industries, and prospects that match your goals—start your journey now!</p>
                <a href="\" className=" text-base font-semibold text-black bg-white py-3 px-5 rounded-full hover:shadow-xl hover:opacity-70">Explore Now!</a>
              </div>
              <div className="w-full self-end px-4 md:w-1/2 ">
                <div className="relative mt-4 lg:mt-3 lg:right-0">
                  <img src="hero.png" alt="" className="max-w-full mx-auto"/>
                  <span className="absolute bottom-20 -z-10 left-1/2 -translate-x-1/2 md:scale-125 xl:scale-150"></span>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section className="bg-white min-h-screen pt-10 flex-col items-center justify-center">
        <h1 className='font-semibold text-bold text-7xl pb-10 flex items-center justify-center text-[#1A3594]' style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.25)", fontFamily: "poppins" }}>Fakultas</h1>
        <div className="flex flex-wrap max-w-screen-lg mx-auto">
          <div className="w-full px-4 md:w-1/2 flex flex-col items-center">
            <p className="text-xs text-[#1A3594] mb-10 xl:text-md text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Nullam euismod velit vel nunc faucibus, vel tincidunt <br />
              nisi malesuada. Sed eget lacus vel orci volutpat venenatis. <br />
              Phasellus eget eros non nisi lacinia bibendum. <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Nullam euismod velit vel nunc faucibus, vel tincidunt <br />
              nisi malesuada. Sed eget lacus vel orci volutpat venenatis. <br />
              Phasellus eget eros non nisi lacinia bibendum.
            </p>
          </div>
          <div className="w-full px-4 md:w-1/2 flex items-center justify-center">
            <img src="faculty.png" alt="" className="max-w-full" />
          </div>
        </div>
        <div className="relative pb-10 flex items-center justify-center">
        <Swiper
          className="relative mt-10 mx-20 w-full max-w-screen-lg overflow-hidden"
          loop={true}
          spaceBetween={5}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
        >
          {slideData.map((data, index) => (
            <SwiperSlide key={index} className='text-black'>
              {slide(data.title, data.description)}
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev absolute left-5 top-1/2 transform -translate-y-1/2 z-10">
            <FaArrowLeft className="text-white" />
          </div>
          <div className="swiper-button-next absolute right-5 top-1/2 transform -translate-y-1/2 z-10">
            <FaArrowRight className="text-white" />
          </div>
        </Swiper>

        </div>
      </section>
      <section id="minat" className="pb-24 pt-12 max-w-full mx-auto lg:px-36 md:px-12 sm:px-4 flex flex-col items-center justify-center bg-gradient-to-br from-[#1A3594] to-[#6B58B3]">
        <h1 className='text-5xl mb-4'>Test Your <span className="text-[#BDACFF]">Minat</span></h1>
        <p className='text-sm mt-10 text-center font-light mb-10 mx-20'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod velit vel nunc faucibus, vel tincidunt nisi malesuada.
          Sed eget lacus vel orci volutpat venenatis. Phasellus eget eros non nisi lacinia bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam euismod velit vel nunc faucibus, vel tincidunt nisi malesuada. Sed eget lacus vel orci volutpat venenatis. Phasellus eget eros non nisi lacinia bibendum.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-4 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-white text-3xl font-semibold mb-8">What model do we use?</h2>
              <p className="text-xs text-white mb-10 xl:text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Nullam euismod velit vel nunc faucibus, vel tincidunt <br></br>nisi malesuada. Sed eget lacus vel orci volutpat venenatis. <br></br>Phasellus eget eros non nisi lacinia bibendum. <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Nullam euismod velit vel nunc faucibus, vel tincidunt <br></br>nisi malesuada. Sed eget lacus vel orci volutpat venenatis.<br></br> Phasellus eget eros non nisi lacinia bibendum.
              </p>
            </div>
            <div className="w-full px-4 md:w-1/2 flex items-center justify-center">
              <div className="-mt-40 relative lg:right-0 flex items-center justify-center">
                <img src="accuracy.png" alt="" className="max-w-full mx-auto" />
                <span className="absolute bottom-20 -z-10 left-1/2 -translate-x-1/2 md:scale-125 xl:scale-150"></span>
              </div>
            </div>
          </div>
        </div>
        <a href="\" className="mt-10  items-center justify-center text-base font-semibold text-black bg-white py-3 px-5 rounded-full hover:shadow-xl hover:opacity-70">Explore Now!</a>
      </section>
    </main>
  );
}
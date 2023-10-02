import React from 'react';
import heroImg from '../assets/img/hero3.png'
import {Link} from 'react-router-dom'

const Hero = () => {
  return <section className='bg-pink-200 h-[570px] 
  bg-hero bg-no-repeat bg-cover bg-center py-24'>
    <div className="container-mx-auto flex justify-around items-center h-full">
      {/* hero text */}
      <div className='flex flex-col justify-center'>
        <div className='font-semibold flex items-center'>
          <div className='w-10 h-[2px] bg-red-400 mr-3'></div>
          NEW ARRIVAL
        </div>
        <h1 className='text-[50px] lg:text-[70px] 
          leading-[1.1] font-light mb-4'>
            AUTUMN SALE <br /> HOT OFFER <br />
          <span className='font-semibold'> MEN & WOMEN</span>
        </h1>
        <Link to={'/'} className='self-start uppercase font-semibold
         border-b-2 border-black text-gray-500'>Explore More</Link>
      </div>
      {/* hero image */}
      <div className='hidden sm:block'>
        <img src={heroImg} alt="" className='h-[350px]'/>
      </div>
    </div>
  </section>;
};

export default Hero;

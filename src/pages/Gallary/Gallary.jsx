import React from 'react'
import Gallary1 from '../../assets/images/gallary1.png'
import Gallary2 from '../../assets/images/gallary2.png'
import Gallary3 from '../../assets/images/gallary3.png'
import Gallary4 from '../../assets/images/gallary4.png'
import Gallary5 from '../../assets/images/gallary5.png'
import Gallary6 from '../../assets/images/gallary6.png'
import { ReactComponent as FrameLeft } from '../../assets/icons/frame-left.svg'
import { ReactComponent as FrameRight } from '../../assets/icons/frame-right.svg'

const Gallary = () => {
  return (
    <main className={`relative flex flex-col justify-center items-center py-36 lg:pt-24`} id="gallary">
      <FrameLeft className={`hidden absolute top-0 left-0 lg:block`}/>
      <FrameRight className={`hidden absolute top-0 right-0 lg:block`}/>
      <h1 className={`text-pro-dark-blue text-4xl text-center font-Catamaran font-bold md:mb-5 md:text-left sm:text-5xl lg:text-6xl xl:text-7xl`}>Our <span className="text-pro-yellow">Gallery</span></h1>
      <section className='grid grid-cols-2 gap-4 p-10 sm:px-20 md:grid-cols-3 lg:px-32 xl:px-72'>
        <div className='relative flex justify-center items-center lg:w-64 lg:h-64'>
          <img src={Gallary1} className='w-full' alt="Gallery Image" />
          <div className='absolute w-full h-full bg-sky-shadow opacity-35 lg:w-64 lg:h-64'></div>
        </div>
        <div className='relative flex justify-center items-center lg:w-64 lg:h-64'>
          <img src={Gallary2} className='w-full' alt="Gallery Image" />
          <div className='absolute w-full h-full bg-sky-shadow opacity-35 lg:w-64 lg:h-64'></div>
        </div>
        <div className='relative flex justify-center items-center lg:w-64 lg:h-64'>
          <img src={Gallary3} className='w-full' alt="Gallery Image" />
          <div className='absolute w-full h-full bg-sky-shadow opacity-35 lg:w-64 lg:h-64'></div>
        </div>
        <div className='relative flex justify-center items-center lg:w-64 lg:h-64'>
          <img src={Gallary4} alt="Gallery Image" />
          <div className='absolute w-full h-full bg-sky-shadow opacity-35 lg:w-64 lg:h-64'></div>
        </div>
        <div className='relative flex justify-center items-center lg:w-64 lg:h-64'>
          <img src={Gallary5} alt="Gallery Image" />
          <div className='absolute w-full h-full bg-sky-shadow opacity-35 lg:w-64 lg:h-64'></div>
        </div>
        <div className='relative flex justify-center items-center lg:w-64 lg:h-64'>
          <img src={Gallary6} alt="Gallery Image" />
          <div className='absolute w-full h-full bg-sky-shadow opacity-35 lg:w-64 lg:h-64'></div>
        </div>
      </section>
      <button className={`flex justify-center items-center bg-pro-blue duration-1000 hover:duration-1000 hover:shadow-xl hover:shadow-pro-light-blue opacity-50 rounded-xl text-white font-medium py-4 px-10 mt-4`}>View All</button>
    </main>
  )
}

export default Gallary

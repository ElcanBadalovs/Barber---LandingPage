import React from 'react'
import { ReactComponent as HomeImage } from '../../assets/images/home.svg'

const Home = () => {
  return (
    <main className='flex flex-col pt-24 pb-42 md:flex-row' id="home">
      <section className={`w-full flex flex-col justify-center items-center px-8 md:px-0 md:pt-24 md:pl-12 md:justify-start md:items-start lg:pt-14 lg:pl-16`}>
        <h1 className={`text-pro-dark-blue text-4xl text-center font-Catamaran font-bold mb-10 md:mb-5 md:text-left sm:text-5xl lg:text-6xl xl:text-7xl`}><span className={`text-pro-yellow`}>Hairstyle</span> Reflects The Personality Inside You</h1>
        <p className={`text-pro-dark-blue text-2xl text-center font-normal mb-5 md:text-left lg:pr-16`}>It is a long established fact that a reader will be distracted by the readable content of a page w hen looking at.</p>
        <button className={`flex justify-center items-center bg-pro-blue duration-1000 hover:duration-1000 hover:shadow-xl hover:shadow-pro-light-blue opacity-50 rounded-xl text-white font-medium py-4 px-10 mt-4`}>Get Started</button>
      </section>
      <HomeImage className={`w-full hidden md:block`} />
    </main>
  )
}

export default Home

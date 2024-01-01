import React from 'react'
import HistoryImage from '../../assets/icons/history.svg'
import { ReactComponent as FrameLeft } from '../../assets/icons/frame-left.svg'
import { ReactComponent as FrameRight } from '../../assets/icons/frame-right.svg'

const History = () => {
  return (
    <main className={`flex flex-col items-center relative pt-36 px-8 md:flex-row md:items-start lg:pt-64 lg:px-20`} id="history">
      <FrameLeft className={`hidden absolute top-0 left-0 lg:block`}/>
      <FrameRight className={`hidden absolute top-0 right-0 lg:block`}/>
      <img src={HistoryImage} className={`w-6/12 hidden md:block`}/>
      <section className={`w-full flex flex-col md:pt-10 md:pl-12 lg:pt-4 lg:pl-15`}>
        <h1 className={`text-pro-dark-blue text-4xl text-center font-Catamaran font-bold mb-10 sm:text-5xl md:mb-5 md:text-left lg:mb-10 lg:text-6xl xl:text-7xl`}>Our<span className={`text-pro-yellow`}> History</span></h1>
        <p className={`text-pro-dark-blue text-2xl text-center font-normal pb-10 md:text-left lg:pr-12`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at.</p>
        <p className={`text-pro-dark-blue text-2xl text-center font-normal pb-10 md:text-left lg:pr-12`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at.</p>
        <button className={`flex justify-center items-center bg-pro-blue duration-1000 hover:duration-1000 hover:shadow-xl hover:shadow-pro-light-blue opacity-50 rounded-xl text-white font-medium py-3 px-6 mt-4`}>Learn more</button>
      </section>
    </main>
  )
}

export default History

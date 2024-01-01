import React from 'react'
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg'
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg'
import { ReactComponent as Gmail } from '../../assets/icons/gmail.svg'
const Footer = () => {
  return (
    <main className='relative flex flex-col items-center'>
        <h1 className={`font-Catamaran font-semibold text-4xl text-pro-blue mb-5`}>Barber</h1>
        <p className="w-80 font-Catamaran font-normal text-pro-dark-blue text-center opacity-65">It is a long established fact that a reader will be distracted by the readable</p>
        <section className='flex justify-center items-center gap-5 mb-5'>
            <div className='w-10 h-10 flex justify-center items-center bg-footer-icon rounded-full cursor-pointer duration-1000 hover:bg-sky-light hover:duration-1000'>
                <Facebook className='w-4/12'/>
            </div>
            <div className='w-10 h-10 flex justify-center items-center bg-footer-icon rounded-full cursor-pointer duration-1000 hover:bg-sky-light hover:duration-1000'>
                <Twitter className='w-6/12'/>
            </div>
            <div className='w-10 h-10 flex justify-center items-center bg-footer-icon rounded-full cursor-pointer duration-1000 hover:bg-sky-light hover:duration-1000'>
                <Gmail className='w-6/12'/>
            </div>
        </section>
        <div className='w-9/12 h-px bg-sky-light mb-10'></div>
    </main>
  )
}

export default Footer

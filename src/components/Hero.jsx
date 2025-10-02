import React from 'react'
import Coding from '../assets/coding.webp'
import constructionImage from '../assets/homeimg-CuTQbvoV.webp'
const Hero = () => {
  return (
    <main className='relative w-full h-[90vh] flex items-center justify-center Home' >
      
        <img src={constructionImage} className='w-10/10 h-10/10 top-0 left-0 absolute brightness-70 object-cover' alt="" />
      <section className='relative text-white text-center mb-15 flex flex-col items-center gap-4'>
        <h1 className='relative uppercase font-semibold text-[40px] md:text-6xl'>we will build your dream</h1>
        <p className='text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod assumenda.</p>
        <button className='bg-[#EAB308] text-black rounded py-2 w-30 '>Reach Us</button>
      </section>
    </main>
  )
}

export default Hero

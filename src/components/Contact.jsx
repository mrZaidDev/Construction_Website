import React from 'react'

const Contact = () => {
  return (
   <main className='md:px-20 md:py-20 px-5 py-5 flex flex-col gap-5  md:flex-row bg-white text-black Contact'>
      {/* Heading */}
      <section className='md:w-5/10'>
        <h2 className='text-[40px] md:6xl flex flex-col uppercase'>
            <span className='text-[24px] text-[#EAB308]'>Contact Us</span>
            REACH US FOR ANY QUERY
            <span className='text-[#EAB308]'>_____</span>
            </h2>
        <h3 className='text-[22px]'><em>We are the leader with 25 years of experience in the construction market!</em></h3>
      </section>
      {/* Text */}
      <section className="md:w-50/100">
      {/* FORM */}
      <form className="flex flex-col gap-4" >
         {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-[22px]">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="border h-9 rounded pl-2"
            required
          />
        </div>
        {/* EMAIL */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-[22px]">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border h-9 rounded pl-2"
            required
          />
        </div>
        
        {/* PHONE NUMBER*/}
        <div className="flex flex-col">
          <label htmlFor="num" className="text-[22px]">
            Phone Number
          </label>
          <input
            id="num"
            type="number"
            className="border h-9 rounded pl-2"
            required
          />
        </div>
        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-[22px]">
            Your Message
          </label>
          <textarea
            id="message"
            className="border  rounded pl-2 h-40"
            required
          />
        </div>
        {/* Submit Button */}
               <button className='bg-[#EAB308] text-black rounded py-2 w-30 '>Reach Us</button>

      </form>
      </section>
    </main>
  )
}

export default Contact

import React from 'react'

const About = () => {
  return (
    <main className='md:px-20 md:py-20 px-5 py-5 flex flex-col gap-5  md:flex-row bg-[#242121] text-white About'>
      {/* Heading */}
      <section className='md:w-5/10'>
        <h2 className='text-[40px] md:6xl flex flex-col uppercase'>
            <span className='text-[24px] text-[#EAB308]'>Welcome To</span>
            [Website Name]
            <span className='text-[#EAB308]'>_____</span>
            </h2>
        <h3 className='text-[22px]'><em>We are the leader with 25 years of experience in the construction market!</em></h3>
      </section>
      {/* Text */}
      <section className='md:w-5/10'>
      <p className='text-[19px]'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, fugiat? Fugit labore quaerat voluptatibus reiciendis ratione amet illo ex nesciunt! Quae nihil consequatur assumenda corporis, mollitia tempora aspernatur ipsam, pariatur eius magni totam ducimus error, alias ipsum id aperiam rerum asperiores culpa modi deserunt esse vel similique quidem. Architecto vitae delectus rem. Dolore, corrupti! Voluptates et, id quidem veritatis accusantium, velit dolore sunt eius rem cum cupiditate praesentium incidunt debitis quos. Nobis facere perferendis eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iste dicta! Sint nobis in, sed vitae porro magnam pariatur! Voluptatibus.</p></section>
    </main>
  )
}

export default About

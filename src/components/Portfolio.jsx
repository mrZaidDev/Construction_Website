import React from "react";
import Heyho from '../assets/pexels-heyho-8134750.jpg'
import Heyho2 from '../assets/pexels-heyho-8134845.jpg'
import Jovidas from '../assets/pexels-jovydas-2462015.jpg'
import Bixbay from '../assets/pexels-pixabay-164558.jpg'

const Portfolio = () => {
  return (
    <main className="md:px-20 md:py-20 px-5 py-5 flex flex-col items-center bg-[#242121] text-white Projects">
      <h2 className="text-center text-[40px] md:6xl flex flex-col uppercase">
        Our Portfolio
        <span className="text-[#EAB308]">_____</span>
      </h2>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-14">
        <div>
          <Card image={Heyho} title={'Heyho'} description={'We are really good at what we are doing now a days.  amet consectetur adipisicing elit. Porro, fugiat? Fugit labore quaerat voluptatibus reiciendis ratione amet illo ex nesciunt! Quae nihil consequatur assumenda corporis, mollitia tempora aspernatur ipsam, pariatur eius magni totam ducimus error, alias ipsum id aperiam rerum asperiores culpa modi deserunt esse vel similique quidem. Architecto vitae delectu'}/>
        </div>
        <div className="">
             <Card image={Heyho2} title={'Heyho 2'} description={'We are really good at what we are doing now a days.  amet consectetur adipisicing elit. Porro, fugiat? Fugit labore quaerat voluptatibus reiciendis ratione amet illo ex nesciunt! Quae nihil consequatur assumenda corporis, mollitia tempora aspernatur ipsam, pariatur eius magni totam ducimus error, alias ipsum id aperiam rerum asperiores culpa modi deserunt esse vel similique quidem. Architecto vitae delectu'}/>
        </div>
        <div>
             <Card image={Bixbay} title={'Bixbay'} description={'We are really good at what we are doing now a days.  amet consectetur adipisicing elit. Porro, fugiat? Fugit labore quaerat voluptatibus reiciendis ratione amet illo ex nesciunt! Quae nihil consequatur assumenda corporis, mollitia tempora aspernatur ipsam, pariatur eius magni totam ducimus error, alias ipsum id aperiam rerum asperiores culpa modi deserunt esse vel similique quidem. Architecto vitae delectu'}/>
        </div>
      </section>
    </main>
  );
};

const Card = ({ image, title, description }) => {
  return (
    <div className="">
      <img src={image} className="rounded" alt="" />
      <h3 className="font-semibold text-[21px] md:text-[23px]">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
};
export default Portfolio;

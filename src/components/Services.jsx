import React from "react";
import { BsBuildingsFill } from "react-icons/bs";
import { MdConstruction } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { GiPaintBrush } from "react-icons/gi";
import { RiCustomerServiceFill } from "react-icons/ri";



const Services = () => {
  return (
    <main className="border md:px-20 md:py-20 px-5 py-5 flex flex-col md:justify-center items-center Services">
      <h2 className="text-center text-[40px] md:6xl flex flex-col uppercase md:mb-7">
        Our Best Services
        <span className="text-[#EAB308]">_____</span>
      </h2>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-14">
        <div>
          <Service
            icon={BsBuildingsFill}
            title={"BUILDING RENOVATION"}
            description={
              "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
          />
        </div>
        <div className="">
          <Service
            icon={MdConstruction}
            title={"CONSTRUCTION SERVICES"}
            description={
              "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
          />
        </div>
        <div>
          <Service
            icon={MdDesignServices}
            title={"DESIGN & PLANNING"}
            description={
              "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
          />
        </div>
        <div>
          <Service
            icon={GiNotebook}
            title={"DOCUMENTATION"}
            description={
              "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
          />
        </div>
        <div>
          <Service
            icon={GiPaintBrush}
            title={"INTERIOR DESIGN"}
            description={
              "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
          />
        </div>
        <div>
          {" "}
          <Service
            icon={RiCustomerServiceFill}
            title={"CUSTOMER SUPPORT"}
            description={
              "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
          />
        </div>
      </section>
    </main>
  );
};

const Service = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-center gap-5 ">
      {<Icon className="w-30 h-30 md:w-25 md:h-25" />}
      <div>
        <h3 className="font-semibold md:text-[23px]">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Services;

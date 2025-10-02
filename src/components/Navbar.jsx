import { useEffect, useState } from "react";
import Logo from "../assets/pexels-magda-ehlers-pexels-1337378.jpg";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-scroll";
import { IoIosClose } from "react-icons/io";
const navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const clickBurger = () => {
    setBurgerMenu(!burgerMenu);
  };

  return (
    <nav className="flex items-center justify-around text-white h-[9vh] bg-[#242121] sticky top-0 left-0 z-10">
      {/* Logo */}
      <h4 className="uppercase"><em>Construct</em></h4>
      {/* Small Screen Navbar */}

      {/* if Small Screen Or Large */}
      {isMobile ? (
        <>
          <CiMenuBurger onClick={clickBurger} />
          {burgerMenu && (
            <div className="fixed w-52 h-[100vh] top-0 left-0 bg-white text-black shadow-lg p-4 z-5 flex flex-col gap-5 font-sans items-center">
<IoIosClose className="absolute top-0 right-0 w-8 h-8 pr-2 pt-2" onClick={clickBurger}/>

              <ul className="flex flex-col gap-5 font-sans">
                <Link smooth={true} offset={0} duration={500} to="Home" className="cursor-pointer">
                  <li>Home</li>
                </Link>
                <Link smooth={true} offset={0} duration={500} to="About" className="cursor-pointer">
                  <li>About</li>
                </Link>
                <Link smooth={true} offset={0} duration={500} to="Services" className="cursor-pointer">
                  <li>Services</li>
                </Link>
                <Link smooth={true} offset={0} duration={500} to="Projects" className="cursor-pointer">
                  <li>Projects</li>
                </Link>
                <Link smooth={true} offset={0} duration={500} to="Contact" className="cursor-pointer">
                  <li>Contact</li>
                </Link>
              </ul>
               <button className='bg-[#EAB308] text-black rounded py-2 w-30 '>Book Now</button>
            </div>
          )}
        </>
      ) : (
        <>
          <ul className="flex items-center justify-center gap-10 font-sans">
              <Link smooth={true} offset={0} duration={500} to="Home" className="cursor-pointer">
                  <li>Home</li>
                </Link>
                <Link smooth={true} offset={0} duration={500} to="About" className="cursor-pointer">
                  <li>About</li>
                </Link>
                <Link smooth={true} offset={0} duration={500} to="Services" className="cursor-pointer">
                  <li>Services</li>
                </Link>
                <Link smooth={true} offset={0} duration={500} to="Projects" className="cursor-pointer">
                  <li>Projects</li>
                </Link>
                <Link smooth={true} offset={0} duration={500} to="Contact" className="cursor-pointer">
                  <li>Contact</li>
                </Link>
          </ul>
               <button className='bg-[#EAB308] text-black rounded py-2 w-30 '>Book Now</button>
        </>
      )}
    </nav>
  );
};

export default navbar;

import { useEffect, useState } from 'react';
import { close, menu, mh, signup } from '../assets';
import { Link } from 'react-router-dom';
import { motion, useSpring } from 'framer-motion';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const springProps = useSpring({
    x: isDragging ? 100 : 0,
    scale: isDragging ? 1.2 : 1,
  });


  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateButton((prevAnimateButton) => !prevAnimateButton);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 flex items-center justify-between w-full px-4 py-4 ${scrolled ? 'bg-white' : 'bg-transparent'} navbar`}
      data-aos='fade-down' data-aos-delay='200'
    >
      <Link to='/'>
        <motion.img
          src={mh}
          alt="logo"
          className="w-[113px] h-[52px]"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.8}
          {...springProps}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        />
      </Link>

      <ul className="items-center justify-end hidden space-x-12 font-semibold sm:flex">
        <li>
          <Link to="/" className="font-poppins cursor-pointer text-[16px] text-black hover:text-[#00487C] hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/personalInfo" className="font-poppins cursor-pointer text-[16px] text-black hover:text-[#00487C] hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-300">
            PersonalInfo
          </Link>
        </li>
        <li>
          <Link to="/mentors" className="font-poppins cursor-pointer text-[16px] text-black hover:text-[#00487C] hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-300">
            Mentors
          </Link>
        </li>
        <li>
          <Link 
            className="font-poppins cursor-pointer text-[16px] text-black hover:text-[#00487C] hover:bg-gray-100 px-3 py-2 rounded-md transition-colors duration-300" 
            onClick={() => window.open('https://personal-portfolio-theta-nine.vercel.app/', '_blank')}
>
            Portfolio
          </Link>
        </li>
      </ul>
      <div className="hidden sm:flex">
        <button
          type="button"
          className={`py-4 px-6 flex items-center gap-4 font-poppins font-medium text-base text-[#00A896] ${scrolled ? 'bg-dimWhite border-solid border-2 border-[#00A896] ' : 'bg-white'} rounded-2xl outline-none ${animateButton ? 'animate-pulse' : ''}`}
        >
          <img src={signup} alt="Signup" className="w-6 h-6" />
          <span>Get Started</span>
        </button>
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-end flex-1 mr-4 sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => {
            setToggle((prevToggle) => !prevToggle);
          }}
        />

        {toggle && (
          <div className="mr-4 flex flex-col items-center p-6 bg-white-gradient absolute top-full right-0 mt-2 mx-4 min-w-[140px] rounded-xl sidebar">
            <ul className="flex flex-col items-start justify-end flex-1 mb-4 font-semibold list-none">
              <li className='mb-2'>
                <Link to="/" className='font-poppins cursor-pointer text-[16px] text-neutral-900'>
                  Home
                </Link>
              </li>
              <li className='mb-2'>
                <Link to="/mentors" className='font-poppins cursor-pointer text-[16px] text-neutral-900'>
                  Mentors
                </Link>
              </li>
              <li className='mb-2'>
                <Link to="/personalInfo" className='font-poppins cursor-pointer text-[16px] text-neutral-900'>
                  PersonalInfo
                </Link>
              </li>
              <li>
                <Link 
                  className='font-poppins cursor-pointer text-[16px] text-neutral-900'
                  onClick={() => window.open('https://personal-portfolio-theta-nine.vercel.app/', '_blank')}
                >
                  Portfolio
                </Link>
              </li>
            </ul>

            <div className="flex flex-col items-center">
              <button
                type="button"
                className="flex items-center gap-2 px-2 py-3 text-base font-medium text-[#00A896] outline-none font-poppins bg-white rounded-10px rounded-2xl"
              >
                <img src={signup} alt="Signup" className="w-6 h-6" />
                <span>Get Started</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

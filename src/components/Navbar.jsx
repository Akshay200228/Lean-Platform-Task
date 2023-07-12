import { useEffect, useState } from 'react';
import { close, menu, mh, signup } from '../assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);

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
      <img
        src={mh}
        alt="logo"
        className="w-[113px] h-[52px] "
      />
      <ul className="items-center justify-end hidden space-x-12 font-semibold sm:flex">
        <li>
          <Link to="/" className='font-poppins cursor-pointer text-[16px] text-black hover:text-purple-400'>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className='font-poppins cursor-pointer text-[16px] text-black hover:text-purple-400'>
            About
          </Link>
        </li>
        <li>
          <Link to="/mentors" className='font-poppins cursor-pointer text-[16px] text-black hover:text-purple-400'>
            Mentors
          </Link>
        </li>
        <li>
          <Link to="/sessions" className='font-poppins cursor-pointer text-[16px] text-black hover:text-purple-400'>
            Sessions
          </Link>
        </li>
      </ul>
      <div className="hidden mr-20 space-x-4 sm:flex">
        <button
          type="button"
          className={`py-4 px-6 flex items-center gap-4 font-poppins font-medium text-base text-[#00A896] ${scrolled ? 'bg-dimWhite border-solid border-2 border-[#00A896] ' : 'bg-white'} rounded-2xl outline-none ${animateButton ? 'animate-pulse' : ''}`}
        >
          <img src={signup} alt="Signup" className="w-6 h-6" />
          <span>Get Started</span>
        </button>
      </div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-end flex-1 mr-14 sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => {
            setToggle((prevToggle) => !prevToggle);
          }}
        />

        {toggle && (
          <div className="mr-10 flex flex-col items-center p-6 bg-black-gradient absolute top-full right-0 mt-2 mx-4 min-w-[140px] rounded-xl sidebar">
            <ul className="flex flex-col items-start justify-end flex-1 mb-4 font-semibold list-none">
              <li className='mb-2'>
                <Link to="/" className='font-poppins cursor-pointer text-[16px] text-white'>
                  Home
                </Link>
              </li>
              <li className='mb-2'>
                <Link to="/docs" className='font-poppins cursor-pointer text-[16px] text-white'>
                  Docs
                </Link>
              </li>
              <li className='mb-2'>
                <Link to="/about" className='font-poppins cursor-pointer text-[16px] text-white'>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className='font-poppins cursor-pointer text-[16px] text-white'>
                  Contact
                </Link>
              </li>
            </ul>

            <div className="flex flex-col items-center">
              <button
                type="button"
                className="flex items-center gap-2 px-2 py-3 text-base font-medium text-white outline-none font-poppins bg-purple-gradient rounded-10px"
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

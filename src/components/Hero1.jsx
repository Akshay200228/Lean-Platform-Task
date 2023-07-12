import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightImg, rectangle, char } from '../assets';
import styles from '../style';
import './Hero1.css';

const Hero1 = () => {
  return (
    <section id="hero" className={`mb-10 sm:mb-0 mt-4 md:mt-0 h-screen flex md:flex-row flex-col-reverse ${styles.paddingY}`}>
      {/* Left side */}
      <motion.div
        className={`flex-1 ${styles.flexStart} h-[20vh] sm:h-screen flex-col xl:px-0 sm:px-16 px-6`}
        initial={{ x: -100, opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {/* Heading */}
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="font-poppins font-semibold md:text-[48px] sm:text-[48px] text-[26px] text-[#1E1E1E] ss:leading-[65px] leading-[50px] text-left">
            "Unlock your potential as a <br />
            <span className="text-[#00487C] md:text-[78px] sm:text-[78px] text-[46px]">Mentor</span> and empower <br />
            others to thrive."
          </h1>
        </div>
        <div className="flex flex-col mt-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-16">
          <button className="flex items-center justify-center w-[319px] h-[75px] py-4 px-10 bg-[#00487C] rounded-[18px] font-poppins font-medium text-base text-white outline-none shadow-xl">
            Get Started as a Mentor
            <img src={ArrowRightImg} alt="" className="ml-2" />
          </button>
          <button className="flex items-center justify-center w-[225px] h-[75px] gap-x-47 py-4 px-6 bg-white rounded-[18px] font-poppins font-medium text-base text-[#1E1E1E] border border-[#00A896] outline-none shadow-xl">
            Learn More
            <img src={ArrowRightImg} alt="" className="ml-2" />
          </button>
        </div>
      </motion.div>

       {/* Right side */}
      {/* Models */}
      <div className={`flex mb-10 mt-10 sm:mt-0 sm:mb-0 items-end justify-end flex-1 lg:mt-0 relative`}>
        <div className="absolute w-[200px] h-screen sm:w-auto sm:h-auto">
          <img src={rectangle} alt="" className="object-cover w-[200px] h-full sm:w-[397px] sm:h-screen border rounded-bl-[150px]" />
        </div>
        <div className="absolute w-[200px] sm:w-[408px] h-[56px] sm:h-[432px] right-[100px] sm:right-[190px] top-[50px] sm:top-[80px] rounded-[16px]">
          <img src={char} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero1;

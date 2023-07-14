import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightImg, rectangle, char } from '../assets';
import styles from '../style';
import './Hero1.css';

const Hero1 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const imageVariants = {
    hidden: { rotateY: 90 },
    visible: { rotateY: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const charVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 1 } },
    hover: { scale: 1.2, transition: { duration: 0.3 } },
  };


  return (
    <section id="hero" className={`mb-10 sm:mb-0 mt-4 md:mt-0 h-screen flex md:flex-row flex-col-reverse ${styles.paddingY}`}>
      {/* Left side */}
      <motion.div
        className={`flex-1 ${styles.flexStart} h-[20vh] sm:h-screen flex-col xl:px-0 sm:px-16 px-6`}
        initial={{ opacity: 0, y: 50, rotateX: -90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Heading */}
        <motion.div
          className="flex flex-row items-center justify-between w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="font-poppins font-semibold md:text-[48px] sm:text-[48px] text-[24px] text-[#1E1E1E] ss:leading-[65px] leading-[50px] text-left">
            "Unlock your potential as a <br />
            <span className="text-[#00487C] md:text-[78px] sm:text-[78px] text-[44px]">Mentor</span> and empower <br />
            others to thrive."
          </h1>
        </motion.div>
        <motion.div
          className="flex flex-row mt-4 space-x-16 space-y-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="flex items-center justify-center text-xs w-[150px] sm:w-[319px] h-[50px] sm:h-[75px] py-4 px-2 sm:px-10 bg-[#00487C] rounded-[18px] font-poppins font-medium sm:text-base text-white outline-none shadow-xl">
            Get Started as a Mentor
            <img src={ArrowRightImg} alt="" className="ml-2" />
          </button>
          <button className="flex items-center justify-center w-[125px] sm:w-[225px] h-[50px] sm:h-[75px] gap-x-47 py-4 px-2 sm:px-6 bg-white rounded-[18px] font-poppins font-medium text-xs sm:text-base text-[#1E1E1E] border border-[#00A896] outline-none shadow-xl">
            Learn More
            <img src={ArrowRightImg} alt="" className="ml-2" />
          </button>
        </motion.div>
      </motion.div>
      
      {/* Right side */}
      <div className="relative flex items-end justify-end flex-1 mt-10 mb-10 sm:mt-0 sm:mb-0 lg:mt-0">
        <motion.div
          className="absolute w-[200px] h-screen sm:w-auto sm:h-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src={rectangle}
            alt=""
            className="object-cover w-[200px] h-full sm:w-[397px] sm:h-screen border rounded-bl-[150px]"
            variants={imageVariants}
          />
        </motion.div>
        <motion.div
          className="absolute w-[200px] sm:w-[408px] h-[56px] sm:h-[432px] right-[100px] sm:right-[190px] top-[50px] sm:top-[80px] rounded-[16px]"
          variants={charVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <motion.img src={char} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero1;

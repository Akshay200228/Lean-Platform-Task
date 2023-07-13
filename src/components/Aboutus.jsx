import React from 'react';
import styles from '../style';
import { ArrowRightImg, about } from '../assets';

const Aboutus = () => {

  return (
    <section id='Testimonials' className={`${styles.paddingX} ${styles.flexCenter} mt-20 pt-20 sm:pt-0 sm:mt-20 bg-gray-50 `}>
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <div className="p-4 sm:w-1/2">
          <h2 className="text-3xl font-bold text-center">About Us</h2>
          <p className={`${styles.paddingX} mt-4 text-lg text-gray-600 text-start`}>
            We are a team of passionate developers who love to create amazing websites and apps. We have years of experience in web development and design, and we always strive to deliver the best quality and customer satisfaction.
          <button className="flex items-center mt-4 justify-center w-[200px] h-[55px] sm:w-{125px} sm:h-[75px] py-4 px-6 bg-[#00487C] rounded-[18px] font-poppins font-medium text-base text-[#fff] border outline-none shadow-xl">
            Learn More
            <img src={ArrowRightImg} alt="" className="ml-2" />
          </button>
          </p>
        </div>
        <div className="p-4 ss:p-14 ss:w-1/2 sm:h-auto">
          <img src={about} alt="Random image" className="border shadow-lg rounded-tr-[150px] rounded-bl-[150px] ss:rounded-tr-[100px] sm:rounded-tr-[350px] ss:rounded-bl-[100px] sm:rounded-bl-[350px]" />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;

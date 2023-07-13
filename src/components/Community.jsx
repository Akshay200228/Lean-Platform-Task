import React from 'react';
import styles from '../style';
import { ArrowRightImg, community } from '../assets';

const Community = () => {

  return (
    <section id='Community' className={`${styles.paddingX} ${styles.flexCenter} mb-20 sm:mb-10 bg-gray-50 `}>
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <div className="p-4 ss:p-14 ss:w-1/2 sm:h-auto">
          <img src={community} alt="Random image" className="border rounded-[70px] shadow-xl" />
        </div>
        <div className={`${styles.paddingX} p-4 sm:w-1/2`}>
          <h2 className="text-sm font-medium sm:text-6xl ss:text-6xl text-start">
            Join Our Community of Mentors
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-start">
            Becoming a mentor on Mentor Hub is quick and easy. Follow these simple steps to get started.
            <button className="flex items-center mt-6 justify-center w-[200px] h-[55px] sm:w-{125px} sm:h-[75px] py-4 px-6 bg-[#00487C] rounded-[18px] font-poppins font-medium text-base text-[#fff] border outline-none shadow-xl">
              Learn More
              <img src={ArrowRightImg} alt="" className="ml-2" />
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;

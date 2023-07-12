import React from 'react';
// import data
import { features } from '../constants/index';
import styles from '../style';

const Features = () => {
  // destructure features
  const { feature1, feature2, feature3 } = features;

  // destructure feature1
  return (
    <section id='features' className={`${styles.paddingY} xl:px-0 sm:px-16 px-6 mt-8 sm:mt-2`}>
      <div className='container mx-auto'>
        {/* Feature1 */}
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          {/* text */}
          <div className='flex-1' data-aos='fade-right' data-aos-offset='300'>
            <div className="text-lg lg:text-[22px] text-dimWhite mb-4 lg:mb-6 uppercase font-normal">{feature1.pretitle}</div>
            <h2 className='mb-4 text-6xl font-bold text-white lg:text-8xl'>{feature1.title}</h2>
            <p className={`${styles.paragraph} mb-4`}>{feature1.subtitle}</p>
            <button className='flex items-center text-xl text-white transition-all lg:text-2xl gap-x-3 hover:gap-x-5'>
              {feature1.btnLink} <img src={feature1.btnIcon} alt='' />
            </button>
          </div>
          {/* image */}
          <div className='flex-1' data-aos='fade-left' data-aos-offset='200'>
            <img src={feature1.image} alt='' className='hidden lg:block' />
          </div>
        </div>

        {/* Feature2 */}
        <div className='mt-14 sm:mt-4 flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          {/* image */}
          <div
            className='flex-1 order-2 lg:order-1'
            data-aos='fade-right'
            data-aos-offset='200'
          >
            <img className='relative hidden object-cover w-1/2 h-5/6 md:h-5/6 lg:block' src={feature2.image} alt='' />
          </div>
          {/* text */}
          <div
            className='flex-1 order-1 lg:order-2'
            data-aos='fade-left'
            data-aos-offset='300'
          >
            <div className="text-lg lg:text-[22px] text-dimWhite mb-4 lg:mb-6 uppercase font-normal">{feature2.pretitle}</div>
            <h2 className='mb-4 text-6xl font-bold text-white lg:text-8xl'>{feature2.title}</h2>
            <p className={`${styles.paragraph}`}>{feature2.subtitle}</p>
            <button className='flex items-center text-xl text-white transition-all lg:text-2xl gap-x-3 hover:gap-x-5'>
              {feature2.btnLink} <img src={feature2.btnIcon} alt='' />
            </button>
          </div>
        </div>

        {/* Feature3 */}
        <div className='mt-14 sm:mt-4 flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          {/* text */}
          <div className='flex-1' data-aos='fade-right' data-aos-offset='300'>
            <div className="text-lg lg:text-[22px] text-dimWhite mb-4 lg:mb-6 uppercase font-normal">{feature3.pretitle}</div>
            <h2 className='mb-4 text-6xl font-bold text-white lg:text-8xl'>{feature3.title}</h2>
            <p className={`${styles.paragraph} mb-4`}>{feature3.subtitle}</p>
            <button className='flex items-center text-xl text-white transition-all lg:text-2xl gap-x-3 hover:gap-x-5'>
              {feature3.btnLink} <img src={feature3.btnIcon} alt='' />
            </button>
          </div>
          {/* image */}
          <div className='flex-1' data-aos='fade-left' data-aos-offset='200'>
            <img src={feature3.image} alt='' className='hidden lg:block' />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
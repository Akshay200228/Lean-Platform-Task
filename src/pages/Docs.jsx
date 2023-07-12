import React from 'react';
import { testimonials } from '../constants/index';

// import styles from '../style';
import ClientSlider from '../components/ClientSlider';
import styles from '../style';



const Docs = () => {
  // destructure testimonials
  const { title, clients } = testimonials;

  return (
    <section id='Testimonials' className={`${styles.paddingX} h-screen mt-20 `}>
      {/* Testimonials */}
      <div className="flex flex-row items-center justify-center w-full"
       data-aos='fade-down' data-aos-delay='500'
      >
        <h1 className="font-poppins text-center font-semibold md:text-[36px] sm:text-[36px] text-[26px] text-white ss:leading-[65px] leading-[50px]">
          The <span className='text-gradient'>FASTEST</span> {" "}
          Way To Write <br className="hidden sm:block" />{" "}
          Copy For Your <span className='text-gradient'>WEBSITE</span>
        </h1>
      </div>
      
      <div className='container mx-auto' data-aos='fade-right' data-aos-delay='500'>
        {/* title */}
        <h2 className='title mb-10 lg:mb-20 text-center max-w-[920px] mx-auto'>
          {title}
        </h2>
        {/* slider */}
        <div>
          <ClientSlider clients={clients} />
        </div>
      </div>
    </section>
  );
};

export default Docs;

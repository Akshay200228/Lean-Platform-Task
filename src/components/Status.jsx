import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const Status = () => {

  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when element comes into view
    threshold: 0.1, // Percentage of element visibility required to trigger the animation
  });


  return (
    <motion.div
      id="overview"
      className={`relative bg-[#29347a] mt-20 sm:mt-0`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div
        className='absolute top-0 left-0 hidden w-40 h-10 rotate-180 sm:block'
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <span className="box-border absolute inset-0 block p-0 m-0 overflow-hidden border-0 opacity-100 w-initial h-initial bg-none">
          <img
            src="https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg" alt="bg"
            decoding="async" data-nimg="fill" sizes="100vw"
            srcSet="https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 640w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 750w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 828w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 1080w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 1200w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 1920w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 2048w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 3840w"
            className="box-border absolute inset-0 block w-0 h-0 max-w-full max-h-full min-w-full min-h-full p-0 m-auto border-none"
          />
        </span>
      </div>

      <div
        className='absolute bottom-0 right-0 hidden w-40 h-10 sm:block'
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <span className="box-border absolute inset-0 block p-0 m-0 overflow-hidden border-0 opacity-100 w-initial h-initial bg-none">
          <img
            src="https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg" alt="dotted_illus"
            decoding="async" data-nimg="fill" sizes="100vw"
            srcSet="https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 640w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 750w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 828w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 1080w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 1200w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 1920w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 2048w, https://cdn.thecodehelp.in/llyckc8wjy60b9bg3i8h_5f5a528b6d.svg 3840w"
            className="box-border absolute inset-0 block w-0 h-0 max-w-full max-h-full min-w-full min-h-full p-0 mx-auto border-none"
          />
        </span>
      </div>

      <div
        ref={ref}
        className="relative mx-auto grid max-w-maxScreen grid-cols-2 gap-y-16 overflow-hidden py-16 px-10 font-bold text-[#e8e6e3] sm:grid-cols-4 md:gap-0"
      >
        <motion.div
          className="flex flex-col items-center gap-y-4 border-r-grey50 sm:border-r "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-4xl md:text-5xl"
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span>5</span>+
          </motion.div>
          <motion.div
            className="font-medium text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Landing Pages
            <br />
            Templates
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-y-4 border-r-grey50 sm:border-r "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="text-4xl md:text-5xl"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: inView ? 0 : '', opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <span>10</span>+
          </motion.div>
          <motion.div
            className="font-medium text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Buttons
            <br />
            Animations
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-y-4 border-r-grey50 sm:border-r "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            className="text-4xl md:text-5xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <span>10</span>+
          </motion.div>
          <motion.div
            className="font-medium text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Cards
            <br />
            Components
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-y-4 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.div
            className="text-4xl md:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <span>10</span>+
          </motion.div>
          <motion.div
            className="font-medium text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            Loader
            <br />
            Animation
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Status;
